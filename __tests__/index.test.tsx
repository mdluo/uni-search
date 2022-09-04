import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { SessionProvider } from 'next-auth/react';
import Home from 'pages/index';

import { server } from 'mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe('Home', () => {
  it('renders the search', async () => {
    render(
      <MockedProvider>
        <SessionProvider session={null}>
          <Home />
        </SessionProvider>
      </MockedProvider>,
    );

    await waitFor(() => screen.getByRole('search'));

    expect(screen.getByRole('search')).toHaveAttribute(
      'placeholder',
      'Search all universities',
    );
  });
});
