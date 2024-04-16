import "./App.css"
import Trilhas from './Trilhas'
import Header from './components/Header'
import {Outlet} from "react-router-dom"


function App() {

 
  return (
    
    <>
    <Header/>
    <Outlet/>
     <Trilhas/>
    </>

  )
 
}

export default App
