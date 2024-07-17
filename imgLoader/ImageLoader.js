'use client'

export default function ImageLoader ({ src, width, quality }) {
  return `https://dummyimage.com/${src}?w=${width}&q=${quality || 75}`;
};
