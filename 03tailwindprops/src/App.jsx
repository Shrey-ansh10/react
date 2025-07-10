import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  let name = "Shreyansh";
  let title = "How I built my first website with React, Tailwind CSS and Vite";
  let content = "It was a pretty good experience and I learned a lot about the framework and how to use it. So I thought I'd share my experience with you.";
  let date = "2025-01-01";
  let readingTime = "5 min";

  return (
    <>
      <h1 className='text-2xl font-bold bg-white text-violet-700 p-4 border-indigo-800 rounded-xl mb-4'>This is tailwind css</h1>
      <Card name={name} title={title} content={content} date={date} readingTime={readingTime} />
    </>
  )
}

export default App
