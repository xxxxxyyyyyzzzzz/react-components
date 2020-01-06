import React from 'react'
import { Button } from '-/components'
import './button.scss'

export default {
  title: 'Demo/Button',
  component: Button,
  includeStories: [],
}

export const ButtonType = () => (
  <div className="button-wrapper">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
  </div>
)

export const ButtonShape = () => (
  <>
    <div className="button-wrapper">
      <Button type="primary" shape="circle">
        Circle
      </Button>
      <Button type="primary">Default</Button>
      <Button type="primary" shape="round">
        Round
      </Button>
    </div>
    <div className="button-wrapper">
      <Button shape="circle">Circle</Button>
      <Button>Default</Button>
      <Button shape="round">Round</Button>
    </div>
    <div className="button-wrapper">
      <Button type="dashed" shape="circle">
        Circle
      </Button>
      <Button type="dashed">Default</Button>
      <Button type="dashed" shape="round">
        Round
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="danger" shape="circle">
        Circle
      </Button>
      <Button type="danger">Default</Button>
      <Button type="danger" shape="round">
        Round
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="link" shape="circle">
        Circle
      </Button>
      <Button type="link">Default</Button>
      <Button type="link" shape="round">
        Round
      </Button>
    </div>
  </>
)

export const ButtonSize = () => (
  <>
    <div className="button-wrapper">
      <Button type="primary" size="large">
        Large
      </Button>
      <Button type="primary">Default</Button>
      <Button type="primary" size="small">
        Small
      </Button>
    </div>
    <div className="button-wrapper">
      <Button size="large">Large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
    <div className="button-wrapper">
      <Button type="dashed" size="large">
        Large
      </Button>
      <Button type="dashed">Default</Button>
      <Button type="dashed" size="small">
        Small
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="danger" size="large">
        Large
      </Button>
      <Button type="danger">Default</Button>
      <Button type="danger" size="small">
        Small
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="link" size="large">
        Large
      </Button>
      <Button type="link">Default</Button>
      <Button type="link" size="small">
        Small
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="primary" shape="circle" size="large">
        Large Circle
      </Button>
      <Button type="primary">Default</Button>
      <Button type="primary" shape="circle" size="small">
        Small Circle
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="primary" shape="round" size="large">
        Large Round
      </Button>
      <Button type="primary">Default</Button>
      <Button type="primary" shape="round" size="small">
        Small Round
      </Button>
    </div>
  </>
)

export const ButtonDisabled = () => (
  <>
    <div className="button-wrapper">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </div>
    <div className="button-wrapper">
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </div>
    <div className="button-wrapper">
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="danger">Danger</Button>
      <Button type="danger" disabled>
        Danger(disabled)
      </Button>
    </div>
    <div className="button-wrapper">
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </div>
    <div className="button-wrapper" style={{ background: 'lightgrey', padding: '5px 10px' }}>
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </div>
  </>
)

export const ButtonGhost = () => (
  <div className="button-wrapper" style={{ background: 'lightgrey', padding: '24px' }}>
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="danger" ghost>
      Danger
    </Button>
    <Button type="link" ghost>
      Link
    </Button>
  </div>
)

ButtonType.story = {
  parameters: { foo: 'bar' },
}
