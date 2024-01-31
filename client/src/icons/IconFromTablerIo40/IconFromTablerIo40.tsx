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

export const IconFromTablerIo40 = ({ color = "#7D7D7D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-from-tabler-io-40 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.3333 6.66666L10 2.66666M4.66667 6.66666L6 2.66666M7.33331 13.3333H4.82931C4.35158 13.3333 3.88963 13.1623 3.52707 12.8512C3.1645 12.5401 2.92526 12.1095 2.85265 11.6373L2.01598 6.86932C1.98676 6.67931 1.99897 6.48523 2.05178 6.30038C2.1046 6.11553 2.19676 5.94429 2.32194 5.79839C2.44713 5.6525 2.60239 5.5354 2.77708 5.45512C2.95176 5.37485 3.14174 5.3333 3.33398 5.33332H12.6666C12.8589 5.3333 13.0489 5.37485 13.2236 5.45512C13.3982 5.5354 13.5535 5.6525 13.6787 5.79839C13.8039 5.94429 13.896 6.11553 13.9488 6.30038C14.0017 6.48523 14.0139 6.67931 13.9846 6.86932L13.6653 8.68866M10 12.6667L11.3333 14L14 11.3333M6.66667 9.33332C6.66667 9.68694 6.80714 10.0261 7.05719 10.2761C7.30724 10.5262 7.64638 10.6667 8 10.6667C8.35362 10.6667 8.69276 10.5262 8.94281 10.2761C9.19286 10.0261 9.33333 9.68694 9.33333 9.33332C9.33333 8.9797 9.19286 8.64056 8.94281 8.39051C8.69276 8.14047 8.35362 7.99999 8 7.99999C7.64638 7.99999 7.30724 8.14047 7.05719 8.39051C6.80714 8.64056 6.66667 8.9797 6.66667 9.33332Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconFromTablerIo40.propTypes = {
  color: PropTypes.string,
};
