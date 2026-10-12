import type { AnchorHTMLAttributes, ReactNode } from "react";

type StubProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children?: ReactNode;
};

export default function NextLinkStub({ href, children, ...rest }: StubProps) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
