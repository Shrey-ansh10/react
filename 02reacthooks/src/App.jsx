import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { exit } from 'process'

function App() {
  let [count, setCount] = useState(0)


  // let count = 0;
  // useState(count);
  const addValue = () => {
    count++;
    if(count > 20){
      alert("Counter can't be greater than 20");
      return;
    }
    // console.log(`count is  ${count}`);
    console.log("counter is", count);
    setCount(count);
  }

  const substractValue = () => {
    count--;
    if(count < 0){
      alert("Counter can't be less than 0");
      return;
    }
    console.log("counter is", count);
    setCount(count);
  }

  return (
    <>
      <h1>Counter</h1>

      <h3>Counter Value: {count}</h3>

      <div>
        <div>
          <button onClick={addValue}>Add Value</button>
        </div>
        <br />
        <div>
          <button onClick={substractValue}> Substract Value </button>
        </div>
      </div>
    </>
  )
}

export default App
