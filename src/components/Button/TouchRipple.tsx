import React, {
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useCallback,
  Ref,
  MouseEvent,
  useRef,
} from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import cn from 'classnames'
import variables from '-/styles/variables.scss'
import Ripple from './Ripple'
import rippleStyle from './styles/Ripple.scss'

interface Props {
  className?: string
}

export interface TouchRippleInstance {
  start: (e: MouseEvent<HTMLButtonElement>) => void
  stop: (e: MouseEvent<HTMLButtonElement>) => void
}

interface RippleData {
  id: number
  x: number
  y: number
  radius: number
}

const { prefix } = variables
const { duration } = rippleStyle

const TouchRipple = forwardRef(function TouchRipple(props: Props, ref: Ref<TouchRippleInstance>) {
  const { className } = props
  const [ripples, setRipples] = useState<RippleData[]>([])
  const containerRef = useRef<HTMLSpanElement>(null)
  const rippleIndexRef = useRef(0)

  const cls = useMemo(() => cn(`${prefix}-ripple-root`, className), [className])

  const start = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const container = containerRef.current
    const rect = container
      ? container.getBoundingClientRect()
      : {
          width: 0,
          height: 0,
          top: 0,
          left: 0,
        }

    const offsetX = Math.round(e.clientX - rect.left)
    const offsetY = Math.round(e.clientY - rect.top)
    const sizeX = Math.max(Math.abs((container ? container.clientWidth : 0) - offsetX), offsetX)
    const sizeY = Math.max(Math.abs((container ? container.clientHeight : 0) - offsetY), offsetY)
    const rippleRadius = Math.sqrt(sizeX ** 2 + sizeY ** 2)

    const ripple = {
      id: rippleIndexRef.current,
      x: offsetX,
      y: offsetY,
      radius: rippleRadius,
    }

    setRipples(prevRipples => [...prevRipples, ripple])

    rippleIndexRef.current += 1
  }, [])

  const stop = useCallback(() => {
    setRipples(([, ...rest]) => rest)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      start,
      stop,
    }),
    [start, stop]
  )

  return (
    <span className={cls} ref={containerRef}>
      <TransitionGroup component={null} exit>
        {ripples.map(ripple => (
          <Transition timeout={Number(duration)} key={ripple.id}>
            <Ripple radius={ripple.radius} rippleX={ripple.x} rippleY={ripple.y} />
          </Transition>
        ))}
      </TransitionGroup>
    </span>
  )
})

export default TouchRipple
