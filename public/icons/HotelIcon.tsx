import React from "react";
import type { SVGProps } from "react";

export function IconParkOutlineHotel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth={4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h40"></path>
        <rect
          width={32}
          height={40}
          x={8}
          y={4}
          strokeLinejoin="round"
          rx={2}
        ></rect>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 32h8v12h-8z"
        ></path>
        <path
          strokeLinecap="round"
          d="M15 12h2m-2 6h2m6-6h2m-2 6h2m6-6h2m-2 6h2"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 44h40M28 32h2c.552 0 1.01-.452.904-.994C30.352 28.166 27.471 26 24 26s-6.352 2.165-6.904 5.006c-.106.542.352.994.904.994h2"
        ></path>
      </g>
    </svg>
  );
}
