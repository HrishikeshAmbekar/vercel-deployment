import { SidebarItem } from ".";

export default {
  title: "Components/SidebarItem",
  component: SidebarItem,
  argTypes: {
    active: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["nest-closed", "default", "nest-opened", "nest-hover", "hover"],
      control: { type: "select" },
    },
    nest: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Sidebar item",
    active: "off",
    stateProp: "nest-closed",
    nest: "off",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
    visible: true,
  },
};
