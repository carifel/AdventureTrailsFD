import {createBrowserRouter} from "react-router-dom"
import App from "../App.jsx"


//importação das páginas
import Home from "../pages/Home.jsx"
import Cadastro from "../pages/Cadastro"
import ListaTrilhas from "../pages/ListaTrilhas"

const routers = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
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
        ]
    }   
])

export default routers;