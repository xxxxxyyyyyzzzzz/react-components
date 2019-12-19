import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { Button } from '-/components'
import './button.scss'

export default {
  title: '通用',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: null,
    },
  },
}

export const ButtonStory = (): JSX.Element => (
  <article>
    <section>
      <h2>按钮类型</h2>
      <div className="button-wrapper">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
      </div>
    </section>
    <section>
      <h2>按钮形状</h2>
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
    </section>
    <section>
      <h2>按钮尺寸</h2>
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
    </section>
    <section>
      <h2>按钮不可用状态</h2>
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
    </section>
    <section>
      <h2>幽灵按钮</h2>
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
    </section>
  </article>
)

ButtonStory.story = {
  name: 'Button 按钮',
}

// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// )
