import React from "react";
import { action } from "@storybook/addon-actions";
// @ts-ignore
import { Button } from "@storybook/react/demo";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: null
    }
  }
};

export const textA = () => (
  <Button
    onClick={() => {
      console.warn(123123);
    }}
  >
    {text("content", "Hello Button")}
  </Button>
);

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
