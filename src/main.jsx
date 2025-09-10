import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider,createBrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import Home from './pages/Home.jsx'
import Form from './pages/Form.jsx'
import Location from './pages/Location.jsx'

import Result from './pages/Result.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import AboutUs from './pages/About.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/calculate",
        element:<Location/>
      },
      {
        path:"/result",
        element:<Result/>
      }
      ,
      {
        path:"/calculate-manually",
        element:<Form/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
  </StrictMode>,
)
