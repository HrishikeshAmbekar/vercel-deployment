/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const CollapseIcon2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`collapse-icon-2 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#F7F6F3" height="12" rx="4" transform="rotate(90 12 0)" width="12" x="12" />
      <path
        className="path"
        d="M7.5 3L4.5 6L7.5 9"
        stroke="#454545"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};
