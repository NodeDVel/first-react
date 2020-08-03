import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState();
  const [count, setCount] = useState(0);//매개변수는 초기값
  const [toggle, settoggle] = useState(false);

  // useEffect(() => {
  //   console.log('1');
  // }, [text]);

  // useEffect(() => {
  //   console.log('2');
  // }, [count]);

  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <p>{text}</p>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => settoggle(!toggle)}>toggle</button>
      {toggle && <ToogleComponent/>}
    </div>
  );
}

const ToogleComponent = () => {
  useEffect(() => {
    console.log('3');

    return () => {
      console.log('4');
    }
  });

  return <p>ToggleComponent</p> //retrun 해주기
};

const Counter = ({ count }) => {
  return (
    <>
      <p>숫자: {count}</p>
    </>
  )
}

export default App;
