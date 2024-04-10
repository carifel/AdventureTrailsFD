import {createBrowserRouter} from "react-router-dom"


//importação das páginas
import Home from "../pages/Home.jsx"
import Cadastro from "../pages/Cadastro.jsx"
import ListaTrilhas from "../pages/ListaTrilhas.jsx"

const routers = createBrowserRouter([
    
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/cadastro",
        element: <Cadastro/>,
    },
    {
        path: "/listaTrilhas",
        element: <ListaTrilhas/>,
    },
        
])

export default routers;