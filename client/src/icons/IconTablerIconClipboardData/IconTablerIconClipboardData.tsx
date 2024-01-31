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

export const IconTablerIconClipboardData = ({ color = "#131313", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-tabler-icon-clipboard-data ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5.99999 3.33333H4.66666C4.31304 3.33333 3.9739 3.47381 3.72385 3.72386C3.4738 3.97391 3.33333 4.31304 3.33333 4.66667V12.6667C3.33333 13.0203 3.4738 13.3594 3.72385 13.6095C3.9739 13.8595 4.31304 14 4.66666 14H11.3333C11.6869 14 12.0261 13.8595 12.2761 13.6095C12.5262 13.3594 12.6667 13.0203 12.6667 12.6667V4.66667C12.6667 4.31304 12.5262 3.97391 12.2761 3.72386C12.0261 3.47381 11.6869 3.33333 11.3333 3.33333H9.99999M5.99999 3.33333C5.99999 2.97971 6.14047 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66666C9.02028 2 9.35942 2.14048 9.60947 2.39052C9.85952 2.64057 9.99999 2.97971 9.99999 3.33333M5.99999 3.33333C5.99999 3.68696 6.14047 4.02609 6.39052 4.27614C6.64057 4.52619 6.97971 4.66667 7.33333 4.66667H8.66666C9.02028 4.66667 9.35942 4.52619 9.60947 4.27614C9.85952 4.02609 9.99999 3.68696 9.99999 3.33333M5.99999 11.3333V8.66667M7.99999 11.3333V10.6667M9.99999 11.3333V10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconTablerIconClipboardData.propTypes = {
  color: PropTypes.string,
};
