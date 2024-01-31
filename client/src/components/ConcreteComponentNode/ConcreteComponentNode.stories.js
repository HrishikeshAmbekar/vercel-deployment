import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    icon: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: "tabler-icon-search",
  },
};
