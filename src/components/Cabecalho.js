import Carros from "./Carros"

function Cabecalho(){
    return(
        <>
        <header className="cabecalho">
            <h1>CARROS EM LANÇAMENTO</h1>
            <p>Carros novos e importados</p>
        </header>
        <Carros />
        </>
    )
}

export default Cabecalho