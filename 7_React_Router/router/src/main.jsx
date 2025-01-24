import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      }
      
    ]
  },
  /* {
    path: "contact",
    element: <Contact/>
  } */
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
