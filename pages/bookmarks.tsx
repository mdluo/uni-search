import { useRef } from 'react';

import Head from 'next/head';
import { useSession } from 'next-auth/react';
import { Button, Toaster, NonIdealState } from '@blueprintjs/core';
import {
  University as UniversityType,
  useBookmarkedUniversitiesQuery,
  useDeleteBookmarkMutation,
} from 'graphql/generated';

import Nav from 'components/nav';
import University from 'components/university';

const Bookmarks: React.FC = () => {
  useSession({ required: true });

  const { data, loading, fetchMore } = useBookmarkedUniversitiesQuery();

  const [deleteBookmark] = useDeleteBookmarkMutation({
    refetchQueries: ['Universities', 'BookmarkedUniversities'],
  });

  const toaster = useRef<Toaster>(null);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Bookmarks | Uni Search</title>
      </Head>
      <Nav />
      <Toaster ref={toaster} />
      <div className="container mx-auto max-w-3xl px-3">
        <main className="flex flex-col gap-3 py-6">
          <div className="flex items-center">
            <span className="flex-1 text-[15px]">
              Showing {data?.bookmarks?.edges.length}, Total:{' '}
              {data?.bookmarks?.totalCount}
            </span>
          </div>

          {!loading && data?.bookmarks?.edges?.length === 0 && (
            <NonIdealState
              className="my-16"
              icon="bookmark"
              title="No bookmarked universities"
              description="Your haven't bookmark any universities. Go back to the homepage and start bookmarking."
            />
          )}

          {(data?.bookmarks?.edges.length ?? 0) > 0 && (
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {data?.bookmarks?.edges.map(({ node }) => (
                <University
                  key={node.nodeId}
                  node={node.university as UniversityType}
                  onDeleteBookmark={(nodeId) => {
                    deleteBookmark({
                      variables: { nodeId },
                      onCompleted: () => {
                        toaster.current?.show({
                          intent: 'primary',
                          icon: 'bookmark',
                          message: 'Bookmark removed',
                        });
                      },
                    });
                  }}
                />
              ))}
            </ul>
          )}

          {!loading && data?.bookmarks?.pageInfo.hasNextPage && (
            <Button
              fill
              minimal
              icon="double-chevron-down"
              onClick={() => {
                fetchMore({
                  variables: {
                    after: data.bookmarks?.pageInfo.endCursor,
                  },
                });
              }}
            >
              Show more
            </Button>
          )}

          {loading && <div>Loading...</div>}
        </main>
      </div>
    </>
  );
};

export default Bookmarks;
