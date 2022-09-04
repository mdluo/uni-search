import classnames from 'classnames';
import { signIn } from 'next-auth/react';
import { Button, Icon } from '@blueprintjs/core';
import { Tooltip2 } from '@blueprintjs/popover2';

import useCurrentUser from 'hooks/useCurrentUser';
import Avatar from 'components/avatar';
import { getFlagEmoji } from 'libs/emoji';
import {
  University as UniversityType,
} from 'graphql/generated';

interface Props {
  node: UniversityType;
  onCreateBookmark?: (universityId: string) => void;
  onDeleteBookmark: (nodeId: string) => void;
}

export default function University({
  node: { id, details, bookmarks },
  onCreateBookmark,
  onDeleteBookmark,
}: Props) {
  const user = useCurrentUser();
  const isBookmarked = bookmarks.nodes.length;
  return (
    <li
      key={id}
      className="group flex items-center gap-3 rounded bg-white px-4 py-3 shadow-sm hover:shadow-md"
    >
      <Avatar size={32} details={details} />
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-base text-slate-800 font-semibold">
          {details.name}
        </span>
        <div className="inline-flex gap-3">
          <span className="text-slate-600">
            <span className="align-middle mr-1">
              {getFlagEmoji(details.alpha_two_code)}
            </span>
            {[details['state-province'], details.country]
              .filter((t) => !!t)
              .join(', ')}
          </span>

          <a href={details.web_pages[0]} target="_blank" rel="noreferrer">
            <Icon className="align-middle mr-1" size={12} icon="link" />
            <span>{new URL(details.web_pages[0]).hostname}</span>
          </a>
        </div>
      </div>
      <Tooltip2
        content={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        placement="right"
      >
        <Button
          className={classnames({
            'invisible group-hover:visible': !isBookmarked,
          })}
          intent={isBookmarked ? 'success' : 'primary'}
          large
          minimal
          icon="bookmark"
          onClick={() => {
            if (!user) {
              signIn();
              return;
            }
            if (!isBookmarked && onCreateBookmark) {
              onCreateBookmark(id);
            } else {
              const { nodeId } = bookmarks.nodes[0];
              onDeleteBookmark(nodeId);
            }
          }}
        />
      </Tooltip2>
    </li>
  );
}
