/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconTablerIconChevronDown } from "../../icons/IconTablerIconChevronDown";
import { IconTablerIconLayoutCollage } from "../../icons/IconTablerIconLayoutCollage";
import { Opened } from "../../icons/Opened";
import "./style.css";

interface Props {
  label: string;
  active: "off" | "on";
  stateProp: "nest-closed" | "default" | "nest-opened" | "nest-hover" | "hover";
  nest: "off" | "on";
  className: any;
  icon: JSX.Element;
  override: JSX.Element;
  divClassName: any;
  onClick: () => void;
  divClassNameOverride: any;
  visible: boolean;
}

export const SidebarItem = ({
  label = "Sidebar item",
  active,
  stateProp,
  nest,
  className,
  icon = <IconTablerIconLayoutCollage className="icon-from-tabler-io" color="#7D7D7D" />,
  override = <IconTablerIconLayoutCollage className="icon-from-tabler-io" color="#7D7D7D" />,
  divClassName,
  onClick,
  divClassNameOverride,
  visible = true,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    active: active || "on",
    state: stateProp || "default",
    nest: nest || "off",
  });

  return (
    <div
      className={`sidebar-item ${state.state} ${className}`}
      onClick={onClick}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.nest === "off" && (
        <>
          <>{visible && <>{override}</>}</>
        </>
      )}

      {state.nest === "on" && <>{icon}</>}

      <div
        className={`text-wrapper ${
          state.nest === "off" ? divClassName : state.nest === "on" ? divClassNameOverride : undefined
        }`}
      >
        {label}
      </div>
      {["nest-closed", "nest-hover"].includes(state.state) && (
        <IconTablerIconChevronDown
          className="instance-node"
          color={state.state === "nest-hover" ? "#131313" : "#7D7D7D"}
        />
      )}

      {state.state === "nest-opened" && <Opened className="instance-node" />}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.active === "on" && state.nest === "off" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          active: "on",
          nest: "off",
          state: "hover",
        };
    }
  }

  if (state.active === "on" && state.nest === "off" && state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          active: "off",
          nest: "off",
          state: "default",
        };
    }
  }

  if (state.active === "on" && state.nest === "on" && state.state === "nest-closed") {
    switch (action) {
      case "mouse_enter":
        return {
          active: "on",
          nest: "on",
          state: "nest-hover",
        };
    }
  }

  if (state.active === "on" && state.nest === "on" && state.state === "nest-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          active: "on",
          nest: "on",
          state: "nest-closed",
        };
    }
  }

  if (state.active === "off" && state.nest === "off" && state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          active: "on",
          nest: "off",
          state: "hover",
        };
    }
  }

  return state;
}

SidebarItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.oneOf(["off", "on"]),
  stateProp: PropTypes.oneOf(["nest-closed", "default", "nest-opened", "nest-hover", "hover"]),
  nest: PropTypes.oneOf(["off", "on"]),
  visible: PropTypes.bool,
};
