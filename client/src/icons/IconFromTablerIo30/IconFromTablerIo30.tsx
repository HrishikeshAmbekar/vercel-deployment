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

export const IconFromTablerIo30 = ({ color = "#FFA500", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-from-tabler-io-30 ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2 14.5V13.1667C2 12.4594 2.28095 11.7811 2.78105 11.281C3.28115 10.781 3.95942 10.5 4.66667 10.5H7.33333C8.04058 10.5 8.71885 10.781 9.21895 11.281C9.71905 11.7811 10 12.4594 10 13.1667V14.5M10.6667 2.58667C11.2403 2.73354 11.7487 3.06714 12.1118 3.53488C12.4748 4.00262 12.6719 4.57789 12.6719 5.17C12.6719 5.76212 12.4748 6.33739 12.1118 6.80513C11.7487 7.27287 11.2403 7.60647 10.6667 7.75334M14 14.5V13.1667C13.9966 12.5781 13.7986 12.0072 13.4368 11.5429C13.0751 11.0787 12.5699 10.7471 12 10.6M3.33333 5.16667C3.33333 5.87391 3.61428 6.55219 4.11438 7.05229C4.61448 7.55238 5.29276 7.83333 6 7.83333C6.70724 7.83333 7.38552 7.55238 7.88562 7.05229C8.38572 6.55219 8.66667 5.87391 8.66667 5.16667C8.66667 4.45942 8.38572 3.78115 7.88562 3.28105C7.38552 2.78095 6.70724 2.5 6 2.5C5.29276 2.5 4.61448 2.78095 4.11438 3.28105C3.61428 3.78115 3.33333 4.45942 3.33333 5.16667Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
      />
    </svg>
  );
};

IconFromTablerIo30.propTypes = {
  color: PropTypes.string,
};
