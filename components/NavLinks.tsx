"use client";

import { ReactNode } from "react";
import Link from "next/link";

type NavLinkProps = Readonly<{
  href: string;
  children: ReactNode;
}>;

export default function NavLinks({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-1 px-4 rounded-lg text-sm hover:text-tertiary transition-all duration-300 hover:duration-300 hover:transition-all ease-linear"
    >
      {children}
    </Link>
  );
}
