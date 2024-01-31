/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFromTablerIo11 } from "../../icons/IconFromTablerIo11";
import { IconFromTablerIo13 } from "../../icons/IconFromTablerIo13";
import { IconFromTablerIo30 } from "../../icons/IconFromTablerIo30";
import { IconFromTablerIo38 } from "../../icons/IconFromTablerIo38";
import { IconFromTablerIo40 } from "../../icons/IconFromTablerIo40";
import { IconFromTablerIo46 } from "../../icons/IconFromTablerIo46";
import { IconTablerIconArrowNarrowRight } from "../../icons/IconTablerIconArrowNarrowRight";
import { IconTablerIconArrowUpRight } from "../../icons/IconTablerIconArrowUpRight";
import { IconTablerIconChevronDown } from "../../icons/IconTablerIconChevronDown";
import { IconTablerIconCircleArrowRight } from "../../icons/IconTablerIconCircleArrowRight";
import { IconTablerIconClipboardData } from "../../icons/IconTablerIconClipboardData";
import { IconTablerIconCpu } from "../../icons/IconTablerIconCpu";
import { IconTablerIconGripVertical } from "../../icons/IconTablerIconGripVertical";
import { IconTablerIconHome } from "../../icons/IconTablerIconHome";
import { IconTablerIconLayoutCollage } from "../../icons/IconTablerIconLayoutCollage";
import { IconTablerIconLayoutSidebarLeftExpand } from "../../icons/IconTablerIconLayoutSidebarLeftExpand";
import { IconTablerIconLayoutSidebarRightExpand } from "../../icons/IconTablerIconLayoutSidebarRightExpand";
import { IconTablerIconMessageCircle } from "../../icons/IconTablerIconMessageCircle";
import { IconTablerIconPencil } from "../../icons/IconTablerIconPencil";
import { IconTablerIconPlug } from "../../icons/IconTablerIconPlug";
import { IconTablerIconSearch } from "../../icons/IconTablerIconSearch";
import { IconTablerIconSettings2 } from "../../icons/IconTablerIconSettings2";
import { IconTablerIconSquareRoundedPlus } from "../../icons/IconTablerIconSquareRoundedPlus";
import { IconTablerIconWorld } from "../../icons/IconTablerIconWorld";
import { Opened } from "../../icons/Opened";
import "./style.css";

interface Props {
  icon:
    | "tabler-icon-search"
    | "tabler-icon-home"
    | "tabler-icon-clipboard-data"
    | "tabler-icon-layout-collage"
    | "tabler-icon-basket-check"
    | "tabler-icon-arrow-narrow-right"
    | "tabler-icon-message-circle"
    | "tabler-icon-star"
    | "tabler-icon-users"
    | "tabler-icon-layout-sidebar-right-expand"
    | "tabler-icon-plug"
    | "tabler-icon-layout-sidebar-left-expand"
    | "tabler-icon-dots-vertical"
    | "tabler-icon-logout"
    | "tabler-icon-cpu"
    | "tabler-icon-arrow-up-right"
    | "tabler-icon-chevron-down"
    | "tabler-icon-world"
    | "tabler-icon-square-rounded-plus"
    | "tabler-icon-database-export"
    | "tabler-icon-chevron-up"
    | "tabler-icon-settings-2"
    | "tabler-icon-pencil"
    | "tabler-icon-grip-vertical"
    | "tabler-icon-circle-arrow-right";
}

export const ConcreteComponentNode = ({ icon }: Props): JSX.Element => {
  return (
    <>
      {icon === "tabler-icon-home" && <IconTablerIconHome className="instance-node-2" />}

      {icon === "tabler-icon-layout-collage" && (
        <IconTablerIconLayoutCollage className="instance-node-2" color="#131313" />
      )}

      {icon === "tabler-icon-clipboard-data" && (
        <IconTablerIconClipboardData className="instance-node-2" color="#131313" />
      )}

      {icon === "tabler-icon-world" && <IconTablerIconWorld className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-cpu" && <IconTablerIconCpu className="instance-node-2" />}

      {icon === "tabler-icon-users" && <IconFromTablerIo30 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-plug" && <IconTablerIconPlug className="instance-node-2" />}

      {icon === "tabler-icon-database-export" && <IconFromTablerIo46 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-settings-2" && <IconTablerIconSettings2 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-logout" && <IconFromTablerIo38 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-chevron-down" && <IconTablerIconChevronDown className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-chevron-up" && <Opened className="instance-node-2" />}

      {icon === "tabler-icon-search" && <IconTablerIconSearch className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-layout-sidebar-left-expand" && (
        <IconTablerIconLayoutSidebarLeftExpand className="instance-node-2" />
      )}

      {icon === "tabler-icon-layout-sidebar-right-expand" && (
        <IconTablerIconLayoutSidebarRightExpand className="instance-node-2" />
      )}

      {icon === "tabler-icon-arrow-up-right" && <IconTablerIconArrowUpRight className="instance-node-2" />}

      {icon === "tabler-icon-dots-vertical" && <IconFromTablerIo11 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-grip-vertical" && <IconTablerIconGripVertical className="instance-node-2" />}

      {icon === "tabler-icon-circle-arrow-right" && <IconTablerIconCircleArrowRight className="instance-node-2" />}

      {icon === "tabler-icon-arrow-narrow-right" && <IconTablerIconArrowNarrowRight className="instance-node-2" />}

      {icon === "tabler-icon-pencil" && <IconTablerIconPencil className="instance-node-2" />}

      {icon === "tabler-icon-star" && <IconFromTablerIo13 className="instance-node-2" color="#131313" />}

      {icon === "tabler-icon-message-circle" && (
        <IconTablerIconMessageCircle className="instance-node-2" color="#131313" />
      )}

      {icon === "tabler-icon-square-rounded-plus" && (
        <IconTablerIconSquareRoundedPlus className="instance-node-2" color="#131313" />
      )}

      {icon === "tabler-icon-basket-check" && <IconFromTablerIo40 className="instance-node-2" color="#131313" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  icon: PropTypes.oneOf([
    "tabler-icon-search",
    "tabler-icon-home",
    "tabler-icon-clipboard-data",
    "tabler-icon-layout-collage",
    "tabler-icon-basket-check",
    "tabler-icon-arrow-narrow-right",
    "tabler-icon-message-circle",
    "tabler-icon-star",
    "tabler-icon-users",
    "tabler-icon-layout-sidebar-right-expand",
    "tabler-icon-plug",
    "tabler-icon-layout-sidebar-left-expand",
    "tabler-icon-dots-vertical",
    "tabler-icon-logout",
    "tabler-icon-cpu",
    "tabler-icon-arrow-up-right",
    "tabler-icon-chevron-down",
    "tabler-icon-world",
    "tabler-icon-square-rounded-plus",
    "tabler-icon-database-export",
    "tabler-icon-chevron-up",
    "tabler-icon-settings-2",
    "tabler-icon-pencil",
    "tabler-icon-grip-vertical",
    "tabler-icon-circle-arrow-right",
  ]),
};
