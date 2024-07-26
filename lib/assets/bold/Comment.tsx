import * as React from "react";
import { SVGProps } from "react";
const Comment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 406.667 411.667"
    {...props}>
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-1080.002 101.252h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="b" clipPathUnits="userSpaceOnUse">
        <path d="M-944.68 101.252h1920v-1080h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="m0 0-94.691-303.75h-69.988L-69.987 0Z"
      clipPath="url(a)"
      style={{
        fill: "#4285f4",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#1e1e1e",
        strokeWidth: 5,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="matrix(1.33333 0 0 -1.33333 403.334 3.333)"
    />
    <path
      d="m0 0-94.691-303.75h-69.988L-69.987 0Z"
      clipPath="url(b)"
      style={{
        fill: "#4285f4",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "#1e1e1e",
        strokeWidth: 5,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="matrix(1.33333 0 0 -1.33333 222.905 3.333)"
    />
  </svg>
);
export default Comment;
