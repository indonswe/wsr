import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './updateFooterSlice'

//import styles from './Counter.module.css'

export function UpdateFooter() {
  const count = useSelector(state => state.textUpdate.value)
  const dispatch = useDispatch()
  console.log("UpdateFooter: " + count)

  return(
    <span>{count}</span>
  )

  /*return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Double value"
          onClick={() => dispatch(incrementByAmount(count))}
        >
          Double
        </button>
      </div>
    </div>
  )*/
}