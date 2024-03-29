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

export const IconFromTablerIo38 = ({ color = "#B01212", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-from-tabler-io-38 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.33333 5.33334V4.00001C9.33333 3.64638 9.19286 3.30724 8.94281 3.0572C8.69276 2.80715 8.35362 2.66667 8 2.66667H3.33333C2.97971 2.66667 2.64057 2.80715 2.39052 3.0572C2.14048 3.30724 2 3.64638 2 4.00001V12C2 12.3536 2.14048 12.6928 2.39052 12.9428C2.64057 13.1929 2.97971 13.3333 3.33333 13.3333H8C8.35362 13.3333 8.69276 13.1929 8.94281 12.9428C9.19286 12.6928 9.33333 12.3536 9.33333 12V10.6667M6 8.00001H14M14 8.00001L12 6.00001M14 8.00001L12 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconFromTablerIo38.propTypes = {
  color: PropTypes.string,
};
