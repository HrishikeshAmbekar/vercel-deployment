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

export const IconFromTablerIo46 = ({ color = "#7D7D7D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-from-tabler-io-46 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.66666 4C2.66666 5.10467 5.05466 6 7.99999 6C10.9453 6 13.3333 5.10467 13.3333 4M2.66666 4C2.66666 2.89533 5.05466 2 7.99999 2C10.9453 2 13.3333 2.89533 13.3333 4M2.66666 4V8M13.3333 4V8M2.66666 8C2.66666 9.10467 5.05466 10 7.99999 10C8.74532 10 9.45532 9.94267 10.1 9.83933M2.66666 8V12C2.66666 13.1047 5.05466 14 7.99999 14C8.10466 14 8.20799 13.9987 8.31066 13.9967M10.6667 12.6667H14.6667M14.6667 12.6667L12.6667 10.6667M14.6667 12.6667L12.6667 14.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconFromTablerIo46.propTypes = {
  color: PropTypes.string,
};
