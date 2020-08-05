import React from 'react';
import { useSelector } from 'react-redux';

const View = () => {
  const { number } = useSelector(state => state.counter);
  return (
    <>
      <p>{number}</p>
    </>
  )
}

export default View;