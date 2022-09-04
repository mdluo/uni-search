import React, { useMemo, useState } from 'react';
import NextImage from 'next/image';

interface Props {
  size: number;
  details: {
    name: string;
    domains: string[];
    web_pages: string[];
  };
}

function Avatar({
  size,
  details: { name, domains = [], web_pages = [] },
}: Props) {
  const urls = useMemo(() => {
    const urls = [...domains, ...web_pages].map(
      (url) =>
        `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url}`,
    );
    const initial = name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('');
    urls.push(`https://avatar.tobi.sh/${name}.svg?text=${initial}`);
    return urls;
  }, []);

  const [index, setIndex] = useState(0);

  return (
    <NextImage
      className="rounded-md"
      alt="Logo"
      width={size}
      height={size}
      src={urls[index]}
      onError={() => {
        setIndex((i) => i + 1);
      }}
    />
  );
}

export default React.memo(Avatar);
