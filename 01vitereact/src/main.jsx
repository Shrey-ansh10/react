import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//we can define the function(the component) here itself as well - but we dont do it because it will make the main.jsx messy
function MyApp(){  //this is a component - the name of a component always start with capital and follows CamelCase
  return (
    <div>
      <h1>This is My App</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).
render( //this is the render function, we created a similar render function in the custom react in 01react
    // <MyApp />,
    <App />
) 
