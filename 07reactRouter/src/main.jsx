import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Home, About, Contact, Projects } from './components'  //no need to import github component here
import { Route } from 'react-router-dom'  
// import router from './routes/routes.jsx'

// router configuration ; this one feels like JSON format
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       },
//     ]
//   } 
// ])

// router config ; html type format
const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route 
      // loader = {githubInfoLoader}
      path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route 
      loader = {githubInfoLoader}
      path="github" element={<Github />} /> */}
      <Route path="projects" element={<Projects />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
