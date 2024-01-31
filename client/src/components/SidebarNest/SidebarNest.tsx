/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconFromTablerIo30 } from "../../icons/IconFromTablerIo30";
import { SidebarItem } from "../SidebarItem";
import "./style.css";

interface Props {
  open: "off" | "on";
  className: any;
  sidebarItemIcon: JSX.Element;
}

export const SidebarNest = ({
  open,
  className,
  sidebarItemIcon = <IconFromTablerIo30 className="icon-from-tabler-io-30" color="#7D7D7D" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    open: open || "off",
  });

  return (
    <div
      className={`sidebar-nest ${state.open} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.open === "off" && (
        <SidebarItem
          active="on"
          className="sidebar-item-instance"
          icon={sidebarItemIcon}
          label="Customers"
          nest="on"
          stateProp="nest-closed"
        />
      )}

      {state.open === "on" && (
        <>
          <SidebarItem
            active="on"
            className="sidebar-item-opened-2"
            divClassNameOverride="sidebar-item-opened"
            icon={<IconFromTablerIo30 className="icon-from-tabler-io-30" color="#FFA500" />}
            label="Customers"
            nest="on"
            onClick={() => {
              dispatch("click_420");
            }}
            stateProp="nest-opened"
          />
          <div className="nest">
            <SidebarItem
              active="on"
              className="sidebar-item-2"
              label="Current"
              nest="off"
              stateProp="default"
              visible={false}
            />
            <SidebarItem
              active="on"
              className="sidebar-item-2"
              label="New"
              nest="off"
              stateProp="default"
              visible={false}
            />
            <SidebarItem
              active="on"
              className="sidebar-item-2"
              label="Negotiating"
              nest="off"
              stateProp="default"
              visible={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        open: "on",
      };

    case "click_420":
      return {
        ...state,
        open: "off",
      };
  }

  return state;
}

SidebarNest.propTypes = {
  open: PropTypes.oneOf(["off", "on"]),
};
