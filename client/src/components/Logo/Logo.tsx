/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  union: string;
  frame: string;
}

export const Logo = ({ className, union = "/img/union-1.svg", frame = "/img/frame-3-1.svg" }: Props): JSX.Element => {
  return (
    <div className={`logo ${className}`}>
      <div className="logomark">
        <div className="ellipse" />
        <div className="div" />
        <img className="union" alt="Union" src={union} />
      </div>
      <img className="frame" alt="Frame" src={frame} />
    </div>
  );
};

Logo.propTypes = {
  union: PropTypes.string,
  frame: PropTypes.string,
};
