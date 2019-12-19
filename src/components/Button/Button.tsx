import React, { ButtonHTMLAttributes } from 'react'
import cn from 'classnames'
import { PREFIX_CLASS_NAME } from '-/constant'

import './styles/index.scss'

type Type = 'default' | 'primary' | 'dashed' | 'danger' | 'link'
type Size = 'large' | 'default' | 'small'
type Shape = 'circle' | 'round' | 'default'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: Type
  shape?: Shape
  size?: Size
  ghost?: boolean
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    size = 'default',
    type = 'default',
    shape = 'default',
    ghost = false,
    className,
    htmlType = 'button',
    children,
    prefix = PREFIX_CLASS_NAME,
    ...rest
  } = props

  const cls = cn(className, {
    [`${prefix}-btn`]: true,
    [`${prefix}-btn-${type}`]: type !== 'default',
    [`${prefix}-btn-${size}`]: size !== 'default',
    [`${prefix}-btn-${shape}`]: shape !== 'default',
    [`${prefix}-btn-ghost`]: ghost,
  })

  return (
    <button className={cls} {...rest} type={htmlType}>
      {children}
    </button>
  )
}

export default Button
