import * as React from "react";
import { SVGProps } from "react";
const Heart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 165.036 169.382"
    {...props}>
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-1237.359 668.151h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="b" clipPathUnits="userSpaceOnUse">
        <path d="M-1237.133 607.133h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="c" clipPathUnits="userSpaceOnUse">
        <path d="M-1210.273 722.48h1920v-1080h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0c20.622.076 37.39-13.521 37.453-30.371.062-16.85-16.605-30.571-37.227-30.647"
      clipPath="url(a)"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 5,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="matrix(1.33333 0 0 -1.33333 111.765 84.692)"
    />
    <path
      d="M0 0c20.622.076 37.39-13.521 37.453-30.371.062-16.85-16.605-30.571-37.227-30.647"
      clipPath="url(b)"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 5,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="matrix(1.33333 0 0 -1.33333 111.464 3.334)"
    />
    <path
      d="m0 0-54.238 54.238L-.007 108.47"
      clipPath="url(c)"
      style={{
        fill: "none",
        stroke: "currentcolor",
        strokeWidth: 5,
        strokeLinecap: "butt",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
      transform="matrix(1.33333 0 0 -1.33333 75.65 157.13)"
    />
  </svg>
);
export default Heart;
