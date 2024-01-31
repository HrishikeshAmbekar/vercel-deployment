/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconTablerIconLayoutCollage = ({ color = "#131313", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-tabler-icon-layout-collage ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.66667 2.66666L9.33334 13.3333M8.00001 8L2.66667 9.33333M2.66667 4C2.66667 3.64638 2.80715 3.30724 3.0572 3.05719C3.30724 2.80714 3.64638 2.66666 4.00001 2.66666H12C12.3536 2.66666 12.6928 2.80714 12.9428 3.05719C13.1929 3.30724 13.3333 3.64638 13.3333 4V12C13.3333 12.3536 13.1929 12.6928 12.9428 12.9428C12.6928 13.1929 12.3536 13.3333 12 13.3333H4.00001C3.64638 13.3333 3.30724 13.1929 3.0572 12.9428C2.80715 12.6928 2.66667 12.3536 2.66667 12V4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconTablerIconLayoutCollage.propTypes = {
  color: PropTypes.string,
};
