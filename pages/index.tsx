import { useState, useCallback, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import Head from 'next/head';
import { Button, Toaster, NonIdealState } from '@blueprintjs/core';
import {
  University as UniversityType,
  UniversitiesOrderBy,
  useUniversitiesQuery,
  useCreateBookmarkMutation,
  useDeleteBookmarkMutation,
} from 'graphql/generated';

import Nav from 'components/nav';
import Search from 'components/search';
import type { Country } from 'components/country-select/CountrySelect';
import Sort from 'components/sort';
import University from 'components/university';

const Index: React.FC = () => {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState<Country | undefined>();
  const [orderBy, setOrderBy] = useState<UniversitiesOrderBy>(
    UniversitiesOrderBy.NameAsc,
  );

  const { data, loading, fetchMore, refetch } = useUniversitiesQuery({
    variables: {
      search: search.trim(),
      countryIso2: country?.iso2 || null,
      orderBy,
    },
  });

  const debouncedRefetch = useCallback(debounce(refetch, 300), []);

  useEffect(() => {
    debouncedRefetch();
  }, [search, country, orderBy, refetch]);

  const [createBookmark] = useCreateBookmarkMutation({
    refetchQueries: ['Universities', 'BookmarkedUniversities'],
  });
  const [deleteBookmark] = useDeleteBookmarkMutation({
    refetchQueries: ['Universities', 'BookmarkedUniversities'],
  });

  const toaster = useRef<Toaster>(null);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Uni Search</title>
      </Head>
      <Nav />
      <Toaster ref={toaster} />
      <div className="container mx-auto max-w-3xl px-3">
        <main className="flex flex-col gap-3 py-6">
          <Search
            {...{ loading, country, setCountry }}
            value={search}
            onChange={setSearch}
          />

          <div className="flex items-center">
            <span className="flex-1 text-[15px]">
              Showing {data?.universities?.edges.length}, Total:{' '}
              {data?.universities?.totalCount}
            </span>

            <Sort
              showCountry={!country}
              value={orderBy}
              onChange={setOrderBy}
            />
          </div>

          {!loading && data?.universities?.edges.length === 0 && (
            <NonIdealState
              className="my-16"
              icon="search"
              title="No search results"
              description="Your search didn't match any universities. Try searching for something else."
            />
          )}

          {(data?.universities?.edges.length ?? 0) > 0 && (
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {data?.universities?.edges.map(({ node }) => (
                <University
                  key={node.id}
                  node={node as UniversityType}
                  onCreateBookmark={(universityId) => {
                    createBookmark({
                      variables: { universityId },
                      onCompleted: () => {
                        toaster.current?.show({
                          intent: 'success',
                          icon: 'bookmark',
                          message: 'Bookmarked',
                          action: {
                            href: '/bookmarks',
                            text: 'View all',
                          },
                        });
                      },
                    });
                  }}
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

          {!loading && data?.universities?.pageInfo.hasNextPage && (
            <Button
              fill
              minimal
              icon="double-chevron-down"
              onClick={() => {
                fetchMore({
                  variables: {
                    after: data.universities?.pageInfo.endCursor,
                  },
                });
              }}
            >
              Show more
            </Button>
          )}
        </main>
      </div>
    </>
  );
};

export default Index;
