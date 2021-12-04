import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './thePersonSlice'
//import styles from './Counter.module.css'

export function Persons() {
  const count = useSelector(state => state.persons.value)
  const dispatch = useDispatch()

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