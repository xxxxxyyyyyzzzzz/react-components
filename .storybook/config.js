import { configure, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "responsive"
  }
});

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.(tsx|mdx)$/), module);
