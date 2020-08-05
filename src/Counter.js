import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './store/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter;