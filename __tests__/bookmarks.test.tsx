import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { SessionProvider } from 'next-auth/react';
import Bookmarks from 'pages/bookmarks';

describe('Bookmarks', () => {
  it('renders the non ideal state', async () => {
    render(
      <MockedProvider>
        <SessionProvider session={null}>
          <Bookmarks />
        </SessionProvider>
      </MockedProvider>,
    );
  });
});
