import CardTrilha from '../components/CardTrilha'
import useFetch from "../hooks/useFetch.js"

function Trilhas() {
    const [listaTrilhas] = useFetch('/trilhas/trilhas.json');
    return(
        <div>
            <img src="https://images.pexels.com/photos/6773749/pexels-photo-6773749.jpeg" alt="" width = "50%" height={300}/>
          <h1>Explore Trilhas Incríveis</h1>
          {
            listaTrilhas && listaTrilhas.map((trilha, index) => (
            <CardTrilha dadosTrilha={trilha} key={index}/>
            ))
          }
        </div>
    )
   }
   export default Trilhas;