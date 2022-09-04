import { useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

interface Props extends ImageProps {
  fallbackSrc: string;
}

export default function Image(props: Props) {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}
