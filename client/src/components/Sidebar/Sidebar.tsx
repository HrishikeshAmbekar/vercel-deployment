/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CollapseIcon1 } from "../../icons/CollapseIcon1";
import { CollapseIcon2 } from "../../icons/CollapseIcon2";
import { IconFromTablerIo30 } from "../../icons/IconFromTablerIo30";
import { IconFromTablerIo38 } from "../../icons/IconFromTablerIo38";
import { IconFromTablerIo40 } from "../../icons/IconFromTablerIo40";
import { IconFromTablerIo46 } from "../../icons/IconFromTablerIo46";
import { IconTablerIconClipboardData } from "../../icons/IconTablerIconClipboardData";
import { IconTablerIconLayoutCollage } from "../../icons/IconTablerIconLayoutCollage";
import { IconTablerIconMessageCircle } from "../../icons/IconTablerIconMessageCircle";
import { IconTablerIconSearch } from "../../icons/IconTablerIconSearch";
import { IconTablerIconSettings2 } from "../../icons/IconTablerIconSettings2";
import { IconTablerIconWorld } from "../../icons/IconTablerIconWorld";
import { Avatar } from "../Avatar";
import { Logo } from "../Logo";
import { SidebarItem } from "../SidebarItem";
import { SidebarNest } from "../SidebarNest";
import { Tag } from "../Tag";
import "./style.css";

interface Props {
  collapse: "off" | "on";
  className: any;
  logoFrame: string;
  sidebarNestSidebarItemIcon: JSX.Element;
  sidebarItemIcon: JSX.Element;
  override: JSX.Element;
  sidebarItemIcon1: JSX.Element;
  sidebarItemIcon2: JSX.Element;
  sidebarItemIcon3: JSX.Element;
  sidebarItemIcon4: JSX.Element;
  sidebarItemIcon5: JSX.Element;
  inputType: string;
  inputType1: string;
}

export const Sidebar = ({
  collapse,
  className,
  logoFrame = "/img/frame-3-2.svg",
  sidebarNestSidebarItemIcon = <IconFromTablerIo30 className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon = <IconTablerIconClipboardData className="icon-from-tabler-io-2" color="#7D7D7D" />,
  override = <IconTablerIconWorld className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon1 = <IconTablerIconMessageCircle className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon2 = <IconFromTablerIo40 className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon3 = <IconFromTablerIo46 className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon4 = <IconTablerIconSettings2 className="icon-from-tabler-io-2" color="#7D7D7D" />,
  sidebarItemIcon5 = <IconFromTablerIo38 className="icon-from-tabler-io-2" color="#B01212" />,
  inputType = "text",
  inputType1 = "text",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    collapse: collapse || "off",
  });

  return (
    <div className={`sidebar collapse-${state.collapse} ${className}`}>
      <div className="brand">
        {state.collapse === "off" && <Logo className="logo-instance" frame={logoFrame} union="/img/union-2.svg" />}

        {state.collapse === "on" && (
          <div className="logomark-wrapper">
            <div className="logomark-2">
              <div className="ellipse-2" />
              <div className="ellipse-3" />
              <img className="img" alt="Union" src="/img/union-2.svg" />
            </div>
          </div>
        )}

        <div
          className="collapse"
          onClick={() => {
            dispatch("click");
          }}
        >
          {state.collapse === "off" && <CollapseIcon2 className="collapse-icon" />}

          {state.collapse === "on" && <CollapseIcon1 className="collapse-icon" />}
        </div>
      </div>
      <div className="items">
        {state.collapse === "off" && (
          <>
            <div className="search">
              <div className="bar">
                <IconTablerIconSearch className="icon-from-tabler-io-2" color="#7D7D7D" />
                <input className="input" placeholder="Search" type={inputType} />
              </div>
            </div>
            <SidebarItem
              active="on"
              className="sidebar-item-3"
              label="Dashboard"
              nest="off"
              override={<IconTablerIconLayoutCollage className="icon-from-tabler-io-2" color="#FFA500" />}
              stateProp="default"
            />
            <SidebarNest className="sidebar-nest-instance" open="off" sidebarItemIcon={sidebarNestSidebarItemIcon} />
            <SidebarItem
              active="off"
              className="sidebar-item-3"
              label="All reports"
              nest="off"
              override={sidebarItemIcon}
              stateProp="default"
            />
            <SidebarItem
              active="off"
              className="sidebar-item-3"
              label="Geography"
              nest="off"
              override={override}
              stateProp="default"
            />
            <SidebarItem
              active="off"
              className="sidebar-item-3"
              label="Conversations"
              nest="off"
              override={sidebarItemIcon1}
              stateProp="default"
            />
            <SidebarItem
              active="off"
              className="sidebar-item-3"
              label="Deals"
              nest="off"
              override={sidebarItemIcon2}
              stateProp="default"
            />
            <SidebarItem
              active="off"
              className="sidebar-item-3"
              label="Export"
              nest="off"
              override={sidebarItemIcon3}
              stateProp="default"
            />
          </>
        )}

        {state.collapse === "on" && (
          <>
            <div className="bar-wrapper">
              <div className="bar-2">
                <IconTablerIconSearch className="icon-from-tabler-io-2" color="#7D7D7D" />
                <input className="search-2" placeholder="Search" type={inputType1} />
              </div>
            </div>
            <img className="sidebar-item-4" alt="Sidebar item" src="/img/sidebar-item-01.svg" />
            <div className="sidebar-item-wrapper">
              <div className="icon-from-tabler-io-wrapper">
                <IconFromTablerIo30 className="icon-from-tabler-io-2" color="#7D7D7D" />
              </div>
            </div>
            <img className="sidebar-item-4" alt="Sidebar item" src="/img/sidebar-item-02.svg" />
            <img className="sidebar-item-4" alt="Sidebar item" src="/img/sidebar-item-03.svg" />
            <div className="sidebar-item-5">
              <IconTablerIconMessageCircle className="icon-from-tabler-io-2" color="#7D7D7D" />
            </div>
            <div className="sidebar-item-5">
              <IconFromTablerIo40 className="icon-from-tabler-io-2" color="#7D7D7D" />
            </div>
            <img className="sidebar-item-4" alt="Sidebar item" src="/img/sidebar-item-07.svg" />
          </>
        )}
      </div>
      <div className="user">
        <div className="info">
          {state.collapse === "off" && (
            <>
              <Avatar className="avatar-instance" />
              <div className="frame-2">
                <div className="text-wrapper-3">Gustavo Xavier</div>
                <Tag className="tag-instance" />
              </div>
            </>
          )}

          {state.collapse === "on" && <div className="avatar-2" />}
        </div>
        <div className="frame-3">
          {state.collapse === "off" && (
            <>
              <SidebarItem
                active="off"
                className="sidebar-item-3"
                label="Settings"
                nest="off"
                override={sidebarItemIcon4}
                stateProp="default"
              />
              <SidebarItem
                active="off"
                className="sidebar-item-3"
                divClassName="sidebar-item-6"
                label="Log out"
                nest="off"
                override={sidebarItemIcon5}
                stateProp="default"
              />
            </>
          )}

          {state.collapse === "on" && (
            <>
              <div className="sidebar-item-5">
                <IconTablerIconSettings2 className="icon-from-tabler-io-2" color="#7D7D7D" />
              </div>
              <div className="sidebar-item-5">
                <IconFromTablerIo38 className="icon-from-tabler-io-2" color="#B01212" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.collapse === "off") {
    switch (action) {
      case "click":
        return {
          collapse: "on",
        };
    }
  }

  if (state.collapse === "on") {
    switch (action) {
      case "click":
        return {
          collapse: "off",
        };
    }
  }

  return state;
}

Sidebar.propTypes = {
  collapse: PropTypes.oneOf(["off", "on"]),
  logoFrame: PropTypes.string,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
};
