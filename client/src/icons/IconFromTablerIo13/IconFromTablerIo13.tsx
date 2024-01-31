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

export const IconFromTablerIo13 = ({ color = "#734A00", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-from-tabler-io-13 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.99998 11.8333L3.88532 13.9967L4.67132 9.41467L1.33798 6.17L5.93798 5.50334L7.99532 1.33467L10.0526 5.50334L14.6526 6.17L11.3193 9.41467L12.1053 13.9967L7.99998 11.8333Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconFromTablerIo13.propTypes = {
  color: PropTypes.string,
};
