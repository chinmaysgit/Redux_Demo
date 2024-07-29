import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreament, increament } from './feature/counterSlice';
function App() {

  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  return (
    <>
    <h2>Counter</h2>
    <button onClick={() => dispatch(decreament())}>-</button>
    <h3>{count}</h3>
    <button onClick={() => dispatch(increament())}>+</button>
    </>
  )
}

export default App