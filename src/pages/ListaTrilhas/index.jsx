import {useContext} from "react";
import CardTrilha from "../../components/CardTrilha";
import{TrilhasContext} from "../../Context/TrilhasContext";
import{Container, PageTitle, TrailsContainer} from "./styles";

function ListaTrilhas(){
    
    const{trilhas, isLoading} = useContext(TrilhasContext);

  
    return (
        <Container>
            <PageTitle>Explore trilhas incríveis</PageTitle>
           
            {Array.isArray(trilhas) && !isLoading ? (
            <TrailsContainer>
            {trilhas.map((trilha, index) => (
                <CardTrilha dadosTrilha={trilha} key={index} />
            ))}
            </TrailsContainer>
            ) : (
                <span>Não há dados disponíveis</span>
            )}
        </Container>
    );
}
export default ListaTrilhas;