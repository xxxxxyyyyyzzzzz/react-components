import React, { ButtonHTMLAttributes, useRef, MouseEvent, useCallback } from 'react'
import cn from 'classnames'
import TouchRipple, { TouchRippleInstance } from './TouchRipple'

import variables from '-/styles/variables.scss'
import './styles/index.scss'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * 按钮类型
   *
   * @default default
   */
  type?: 'default' | 'primary' | 'dashed' | 'danger' | 'link'
  shape?: 'circle' | 'round' | 'default'
  size?: 'large' | 'default' | 'small'
  ghost?: boolean
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const { prefix } = variables

/**
 * 这里是按钮的解释说明
 */
const Button = (props: ButtonProps): JSX.Element => {
  const {
    size = 'default',
    type = 'default',
    shape = 'default',
    ghost = false,
    className,
    htmlType = 'button',
    onMouseDown,
    onMouseUp,
    children,
    ...rest
  } = props

  const rippleRef = useRef<TouchRippleInstance>(null)

  const cls = cn(className, {
    [`${prefix}-btn`]: true,
    [`${prefix}-btn-${type}`]: type !== 'default',
    [`${prefix}-btn-${size}`]: size !== 'default',
    [`${prefix}-btn-${shape}`]: shape !== 'default',
    [`${prefix}-btn-ghost`]: ghost,
  })

  const handleMouseDown = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      if (rippleRef.current) {
        rippleRef.current.start(e)
      }

      if (onMouseDown) {
        onMouseDown(e)
      }
    },
    [onMouseDown]
  )

  const handleMouseUp = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (rippleRef.current) {
        rippleRef.current.stop(e)
      }

      if (onMouseUp) {
        onMouseUp(e)
      }
    },
    [onMouseUp]
  )

  return (
    <button
      className={cls}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      {...rest}
      type={htmlType}
    >
      {children}
      <TouchRipple ref={rippleRef} />
    </button>
  )
}

export default Button
