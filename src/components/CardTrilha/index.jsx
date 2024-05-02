import * as PropTypes from "prop-types"
import "./style.css"


function CardTrilha({dadosTrilha}){
    return(
        <div className="card_container">
            <img className="card_imagem" width = {200} src={dadosTrilha.urlImagem} alt="imagem Trilha" />
                <h1>{dadosTrilha.nomeTrilha}</h1>
                <p><b>Local: </b>{dadosTrilha.cidade} / {dadosTrilha.estado}</p>
                <p><b>Duração:</b> {dadosTrilha.duracao} min</p>
                <p><b>Trajeto: </b>{dadosTrilha.trajeto} Km</p>
                <p><b>Dificuldade: </b>{dadosTrilha.dificuldade}</p>
                <p><b>Tipo:</b> {dadosTrilha.tipo}</p><br/>
                <p><b>Criada por:</b> {dadosTrilha.nomeUsuario}</p>
        </div>
    )
}
    //Configuração das PropTypes
    CardTrilha.propTypes = {
        dadosTrilha: PropTypes.exact({
            nomeTrilha: PropTypes.string.isRequired,
            cidade: PropTypes.string.isRequired,
            estado: PropTypes.string.isRequired,
            duracao: PropTypes.number.isRequired,
            trajeto: PropTypes.number.isRequired,
            dificuldade: PropTypes.string.isRequired,
            tipo: PropTypes.oneOf(["caminhada / trekking', 'ciclismo"]),
            nomeUsuario: PropTypes.string.isRequired,
            urlImagem: PropTypes.string.isRequired
        })
    }


export default CardTrilha;