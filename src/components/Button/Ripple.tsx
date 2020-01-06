import React, { useMemo, CSSProperties, useState, useEffect } from 'react'
import cn from 'classnames'
import variables from './styles/Ripple.scss'

interface Props {
  /**
   * @ignore
   */
  in?: boolean
  /** 半径 */
  radius: number
  /** X 轴坐标 */
  rippleX: number
  /** Y 轴坐标 */
  rippleY: number
  /** 是否开启律动效果 */
  pulsate?: boolean
}

const { ripplePrefix } = variables

function Ripple(props: Props): JSX.Element {
  // console.log('props is : %O', props)
  const { radius, rippleX, rippleY, in: isIn } = props

  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!isIn) {
      setLeaving(true)
    }
  }, [isIn])

  const style: CSSProperties = useMemo(
    () => ({
      width: radius * 2,
      height: radius * 2,
      top: rippleY - radius,
      left: rippleX - radius,
    }),
    [radius, rippleX, rippleY]
  )

  const cls = cn(`${ripplePrefix}`, `${ripplePrefix}-visible`)

  const childCls = cn(`${ripplePrefix}-child`, {
    [`${ripplePrefix}-child-leaving`]: leaving,
  })

  return (
    <span className={cls} style={style}>
      <span className={childCls} />
    </span>
  )
}

export default Ripple
