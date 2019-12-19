import React from 'react'
import { linkTo } from '@storybook/addon-links'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { Welcome } from '@storybook/react/demo'

export default {
  title: 'Welcome',
  parameters: {
    docs: {
      page: null,
    },
  },
}

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />

toStorybook.story = {
  name: 'to Storybook',
}
