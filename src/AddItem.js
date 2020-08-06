import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from './store/Item';

const AddItem = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.item)
  const [text, setText] = useState();

  const handleClickAdd = () => {
    dispatch(addItem(text));
    setText('');
  }

  const handleClickDelete = (i) => {
    dispatch(deleteItem(i));
  }


  return (
    <>
      <input onChange={e => setText(e.target.value)} value={text}/>
      <button onClick={handleClickAdd}>추가</button>
      {items.map((item, i) => {
        return (
          <p>{item} <button onClick={() => handleClickDelete(i)}>삭제</button></p>
        )
      })}
    </>
  )
}

export default AddItem;