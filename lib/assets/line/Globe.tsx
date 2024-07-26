import * as React from "react";
import { SVGProps } from "react";
const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300.66 276.344"
    {...props}>
    <defs>
      <clipPath id="a" clipPathUnits="userSpaceOnUse">
        <path d="M-365.913 709.013h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="b" clipPathUnits="userSpaceOnUse">
        <path d="M-303.26 709.013h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="c" clipPathUnits="userSpaceOnUse">
        <path d="M-153.162 671.542h1920v-1080h-1920Z" />
      </clipPath>
      <clipPath id="d" clipPathUnits="userSpaceOnUse">
        <path d="M-153.162 746.314h1920v-1080h-1920Z" />
      </clipPath>
    </defs>
    <path
      d="M0 0c0 55.852-49.359 101.129-110.247 101.129S-220.495 55.852-220.495 0c0-55.852 49.36-101.129 110.248-101.129C-49.359-101.129 0-55.852 0 0Z"
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
      transform="matrix(1.33333 0 0 -1.33333 297.327 138.172)"
    />
    <path
      d="M0 0c0 55.852-21.309 101.129-47.594 101.129S-95.188 55.852-95.188 0c0-55.852 21.309-101.129 47.594-101.129S0-55.852 0 0Z"
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
      transform="matrix(1.33333 0 0 -1.33333 213.789 138.172)"
    />
    <path
      d="M0 0h204.932"
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
      transform="matrix(1.33333 0 0 -1.33333 13.659 88.21)"
    />
    <path
      d="M0 0h204.932"
      clipPath="url(d)"
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
      transform="matrix(1.33333 0 0 -1.33333 13.659 187.907)"
    />
  </svg>
);
export default Globe;
