import type { ImgHTMLAttributes } from "react";

type StubProps = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string | { src?: string };
  alt?: string;
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
};

export default function NextImageStub({
  src,
  fill,
  priority,
  sizes,
  ...rest
}: StubProps) {
  return <img {...rest} src={typeof src === "string" ? src : (src?.src ?? "")} />;
}
