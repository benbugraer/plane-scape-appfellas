import React from "react";
import type { SVGProps } from "react";

export function ZondiconsTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="#4b0097"
        d="M0 10V2l2-2h8l10 10l-10 10zm4.5-4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"
      ></path>
    </svg>
  );
}
