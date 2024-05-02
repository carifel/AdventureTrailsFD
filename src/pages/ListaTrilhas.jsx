import {useContext} from "react";
import CardTrilha from "../components/CardTrilha";
import{TrilhasContext} from "../Context/TrilhasContext";

function ListaTrilhas(){
    
    const{trilhas, isLoading} = useContext(TrilhasContext);

  
    return (
        <div className="container">
            <h1>Explore trilhas incríveis</h1>
            {Array.isArray(trilhas) && !isLoading ? (
            trilhas.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
            ))
            ) : (
                <span>Não há dados disponíveis</span>
            )
            }
        </div>
    )
}
export default ListaTrilhas;