import { useState, useEffect, useRef } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const lastModified = useRef("from")

  const currencyInfo = useCurrencyInfo(from) //data returned from useCurrencyInfo is stored in the variable "currencyInfo". It holds a JSON object.
  
  const options = Object.keys(currencyInfo) //Object.keys() returns an array of keys from the object
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
// handle amount changes with validation
const handleAmountChange = (newAmount) => {

  lastModified.current = "from"

  // ensure amount is never negative
  if (newAmount < 0) newAmount = 0;
  
  setAmount(newAmount);
  
  // if amount is empty or zero, also clear the converted amount
  if (newAmount === 0 || newAmount === null || newAmount === '') {
    setConvertedAmount(newAmount);
  }
}


// handle converted amount changes with validation
const handleConvertedAmountChange = (newAmount) => {

  lastModified.current = "to"
  // ensure amount is never negative
  if (newAmount < 0) newAmount = 0;
  
  setConvertedAmount(newAmount);
  
  // if converted amount is empty or zero, also clear the original amount
  if (newAmount === 0 || newAmount === null || newAmount === '') {
    setAmount(newAmount);
  }
}

// auto-convert whenever amount, from, or to changes
  useEffect(() => {
    if ((amount === "" || amount === null) && (convertedAmount === "" || convertedAmount === null)) {
      return
    }

    // if "from" was last modified, update "to"
    if (lastModified.current === "from" && amount !== "" && amount !== null) {
      setConvertedAmount(Number((amount * currencyInfo[to]).toFixed(6)))
    }

    // If "to" was last modified, update "from"
    if (lastModified.current === "to" && convertedAmount !== "" && convertedAmount !== null) {
      // Avoid division by zero
      const rate = currencyInfo[to]
      if (rate > 0) {
        setAmount(Number((convertedAmount / rate).toFixed(6)))
      }
    }
  }, [amount,convertedAmount, from, to, currencyInfo])

  // useEffect(() => {
  //   if(convertedAmount !== 0 && convertedAmount !== null && convertedAmount !== ''){
  //     setAmount(convertedAmount / currencyInfo[to])
  //   }
  // }, [convertedAmount, to, currencyInfo])

  return (
    <>
      <div 
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
        style={{backgroundImage: 'linear-gradient(to right top, #3A5171, #C187BE)'}}>
          
          <div className='w-full'>
            
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/50'>
              {/* <form 
                onSubmit={(e) => {
                e.preventDefault() //prevent the default behavior of the form to redirect
                convert() //call the convert function
              } }> */}
                <div>
                  <div className='w-full mb-3'>
                    <InputBox
                      label='From' 
                      amount={amount} 
                      onAmountChange={handleAmountChange} 
                      onCurrencyChange = {(currency) => {
                        setFrom(currency)
                        lastModified.current = "from" //track which input was last modified
                      }} 
                      currencyOptions = {options}  
                      selectCurrency = {from}
                      // amountDisable  
                      // currencyDisable = false 
                      // className = ""
                    />
                  </div>
                  
                  <div className='relative w-full h-0.5'>
                    <button 
                      type='button' 
                      className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-blue-600 bg-blue-600 text-white px-2 py-0.5 rounded-md' 
                      onClick={swap}>
                        swap
                    </button>
                  </div>
                  
                  <div className='w-full mt-2 mb-4'>
                    <InputBox
                      label='To'
                      amount={convertedAmount}
                      currencyOptions = {options}
                      onAmountChange={handleConvertedAmountChange}
                      onCurrencyChange = {(currency) => {
                        setTo(currency)
                        lastModified.current = "to"
                      }}
                      selectCurrency = {to}
                      // amountDisable
                      // currencyDisable = false
                      // className = "mt-1"
                    />
                  </div>

                  <div className='flex justify-center items-center gap-1 mb-2' hidden={amount === "" || amount === null || amount === 0}>
                    <p className='text-md text-black font-semibold'>
                      1 {from} = {currencyInfo[to]} {to}
                    </p>
                  </div>

                  {/* <button type='submit' className='w-full bg-blue-600 text-white px-4 py-2 rounded-md' onClick={convert}>
                    Convert 
                  </button> */}
                </div>

              {/* </form> */}
            </div>
          </div>
      </div>
    </>
  );
}

export default App
