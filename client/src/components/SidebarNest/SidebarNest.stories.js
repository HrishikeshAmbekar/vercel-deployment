import { SidebarNest } from ".";

export default {
  title: "Components/SidebarNest",
  component: SidebarNest,
  argTypes: {
    open: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    open: "off",
    className: {},
  },
};
