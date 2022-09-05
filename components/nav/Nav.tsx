import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { Menu, MenuDivider, Icon, Button } from '@blueprintjs/core';
import { Popover2, MenuItem2 } from '@blueprintjs/popover2';

import useCurrentUser from 'hooks/useCurrentUser';

const Nav: React.FC = () => {
  const user = useCurrentUser();

  return (
    <nav className="bg-white shadow">
      <div className="container relative mx-auto flex h-16 max-w-3xl items-center justify-between px-3">
        <div className="inline-flex">
          <Link href="/">
            <a className="flex items-center gap-[6px] text-lg hover:text-sky-600 hover:no-underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
              Uni Search
            </a>
          </Link>
        </div>
        <div className="flex-initial">
          <div className="relative flex items-center justify-end gap-4 ">
            {user ? (
              <Link href="/bookmarks">
                <a className="hover:text-sky-600 hover:no-underline">
                  Bookmarks
                </a>
              </Link>
            ) : (
              <a
                className="hover:text-sky-600 hover:no-underline"
                onClick={() => signIn()}
              >
                Sign in
              </a>
            )}
            {user && (
              <div className="block">
                <div className="relative inline">
                  <Popover2
                    autoFocus
                    canEscapeKeyClose
                    placement="bottom-end"
                    content={
                      <Menu>
                        <MenuItem2 icon="user" text={`Welcome, ${user.name}`} />
                        <MenuDivider />
                        <MenuItem2
                          intent="danger"
                          icon="log-out"
                          text="Log out"
                          onClick={() => signOut()}
                        />
                      </Menu>
                    }
                  >
                    <Button minimal className="rounded-full border py-2 px-3">
                      <span className="flex items-center gap-4">
                        <Icon icon="menu" size={20} />
                        {user.image ? (
                          <NextImage
                            className="rounded-full"
                            width={24}
                            height={24}
                            alt="User image"
                            src={user.image}
                          />
                        ) : (
                          <Icon icon="user" className="h-full" size={22} />
                        )}
                      </span>
                    </Button>
                  </Popover2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
