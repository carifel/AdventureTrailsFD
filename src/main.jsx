import {RouterProvider} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//arquivo de rotas
import routers from './router/routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={routers}>
  </RouterProvider>
);
