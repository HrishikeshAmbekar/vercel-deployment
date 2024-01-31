import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    collapse: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    collapse: "off",
    className: {},
    logoFrame: "/img/frame-3-2.svg",
    inputType: "text",
    inputType1: "text",
  },
};
