import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import resetLogo from './assets/reset.png'

function App() {
  const [color, setColor] = useState("#808080");
  
  // const setGradient = (gradient) => {
  //   setColor(gradient);
  // };

  return (
    <div className='w-full h-screen' style={{background: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400 px-4 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "blue"}}>Blue</button>
          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "purple"}}>Purple</button>
          <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "orange"}}>Orange</button>
          <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "black"}}>Black</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 py-1 rounded-md text-black shadow-lg' style={{background: "white"}}>White</button>
          <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "brown"}}>Brown</button>
          
          {/* <h3 className='w-full text-center text-black font-bold mt-3 mb-2'>Gradients</h3> */}
          <button onClick={() => setColor("linear-gradient(to bottom right, #ff0000, #ffff00)")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "linear-gradient(to bottom right, #ff0000, #ffff00)"}}>Red-Yellow</button>
          <button onClick={() => setColor("linear-gradient(to bottom right,rgb(30, 154, 30),rgb(46, 46, 163))")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "linear-gradient(to bottom right, #00ff00, #0000ff)"}}>Green-Blue</button>
          <button onClick={() => setColor("linear-gradient(to bottom right,rgb(167, 37, 167),rgb(14, 201, 201))")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "linear-gradient(to bottom right, #ff00ff, #00ffff)"}}>Pink-Cyan</button>
          <button onClick={() => setColor("linear-gradient(to bottom right,rgb(214, 122, 9),rgb(125, 18, 70))")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "linear-gradient(to bottom right, #ff8c00, #ff0080)"}}>Orange-Pink</button>
          <button onClick={() => setColor("radial-gradient(circle,rgb(94, 13, 170),rgb(3, 3, 3))")} className='outline-none px-4 py-1 rounded-md text-white shadow-lg' style={{background: "radial-gradient(circle, #8a2be2, #000000)"}}>Purple-Black</button>

          
          {/* reset button */}
          <button onClick={() => setColor("#808080")} style={{background: "none"}}>
             <img src={resetLogo} alt="reset" className='w-7 h-7' />
          </button>
        </div>
      </div>
    </div>

    
  )
}

export default App
