import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    eliment: <App/>,
    children:[
      {
        path:"/",
        eliment:<Home/>
      },
      {
        path:"/calculate"
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
