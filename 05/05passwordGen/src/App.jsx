import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialcharAllowed, setSpecialcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook - used only to show the text selected when the button is clicked
  const passwordRef = useRef(null)

  //randon password generator
  const passwordGenerator = useCallback(() => { //useCallback is used to memoize the function, so that it is not recreated on every render
    
    let pass = "" //string to store password - i.e. password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" //possible characters that can be in password
    if(numberAllowed) str += "0123456789" //add numbers to the password string if numberAllowed is true
    if(specialcharAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?" //add special characters to the password if specialcharAllowed is true

    //loop to generate password of given length 
    for(let i=0; i<length; i++) { //loop will run for the length of the password string
      let char = (Math.floor(Math.random() * str.length+1)) //generate a random character from the string
      pass = pass + str.charAt(char) // the character at the generated random numbered index in string, will be appended to the password string 
    }
    setPassword(pass)
  }, [length, numberAllowed, specialcharAllowed, setPassword]) //the variable and functions are passed in as dependencies, that are tracked for changes, if any changes happen this function will be called.

  useEffect(() => { //useEffect is used to call the function when the component is mounted
    if(passwordGenerator) {
      passwordGenerator()
    }
  }, [length, numberAllowed, specialcharAllowed, passwordGenerator])

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password)
    passwordRef.current?.select() //select the text in the input field
  }

  return (
    <>
      <h2 className='flex justify-center text-3xl font-bold text-center p-2 mt-2'>Password Generator</h2>
      <div className='flex items-center justify-center mt-2 p-1'>
        <div className='flex items-center text-2xl font-bold text-black bg-gray-100 rounded-md p-0.5 w-auto min-w-[550px] px-4'>
          {/* <div className='text-center grow overflow-x-auto px-2'>{password}</div> */}
          <input type="text" value={password} className='text-center grow overflow-x-auto px-2' readOnly ref={passwordRef}/> 
          <button className='bg-green-800 text-white px-3 py-1 m-1 rounded-md shrink-0 transition duration-300 ease-in-out 
                   hover:bg-green-700 hover:scale-105 hover:shadow-lg' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
      </div>
      
      <div className='flex justify-center items-center gap-x-2 mt-2'>
        <label htmlFor="length">Length: {length}</label>
        <input type="range" min={8} max={25} value={length} onChange={(e) => setLength(e.target.value)} />
        <div className='flex items-center gap-x-2'> 
          <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
          <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'> 
          <input type="checkbox" defaultChecked={specialcharAllowed} onChange={() => setSpecialcharAllowed((prev) => !prev)} />
          <label htmlFor="specialcharAllowed">Special Characters</label>
        </div>
        <button className='bg-blue-600 text-white px-3 py-1 rounded-md' onClick={passwordGenerator}>Generate</button>
      </div>
    </>
  )
}

export default App
