/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconTablerIconPencil = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-tabler-icon-pencil ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.99999 4.33333L11.6667 7M2.66666 13.3333H5.33332L12.3333 6.33333C12.5084 6.15824 12.6473 5.95037 12.7421 5.72159C12.8368 5.49282 12.8856 5.24762 12.8856 5C12.8856 4.75238 12.8368 4.50718 12.7421 4.2784C12.6473 4.04963 12.5084 3.84176 12.3333 3.66666C12.1582 3.49157 11.9504 3.35268 11.7216 3.25791C11.4928 3.16315 11.2476 3.11438 11 3.11438C10.7524 3.11438 10.5072 3.16315 10.2784 3.25791C10.0496 3.35268 9.84175 3.49157 9.66666 3.66666L2.66666 10.6667V13.3333Z"
        stroke="#131313"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};
