import Carros from "./Carros"
import Logo from "./imgs/icon-carro.png"

function Cabecalho(){
    return(
        <>
        <header className="cabecalho">
            <img className="icone" src={Logo} alt="Logo da página"></img>
            <h1 className="titulo">CARROS EM LANÇAMENTO</h1>
            <p className="subtitulo">Carros novos e importados</p>
        </header>
        <Carros />
        </>
    )
}

export default Cabecalho