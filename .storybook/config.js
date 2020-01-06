import React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
// import { setConsoleOptions, withConsole } from "@storybook/addon-console";
import '@storybook/addon-console'

// setConsoleOptions({
//   panelExclude: []
// });

// addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator((storyFn, context) => <div style={{ padding: '0 60px 50px' }}>{storyFn(context)}</div>)
addDecorator(withA11y)

addParameters({
  // docs: {
  //   container: DocsContainer,
  //   page: DocsPage,
  // },
  options: {
    panelPosition: 'right',
    theme: themes.normal,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  a11y: {
    element: '#root', // optional selector which element to inspect
    config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    options: {}, // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
  },
})

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(tsx|mdx)$/), module)
