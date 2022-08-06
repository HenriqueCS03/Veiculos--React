import Img from './imgs/porshe.jpg'
import Parceiros from './Parceiros'

function Carros(){
    return(
        <>
            <div className='container-principal'>
                <div>
                    <img className='img-porshe' src={Img} alt="Imagem de uma porshe"></img>
                </div>
                <div>
                    <ul>
                        <li>Porsche Macan</li>
                        <li>Camaro Amarelo</li>
                        <li>Bugatti Type 13</li>
                        <li>Ferrari 812 GTS</li>
                        <li>Gol Quadrado</li>   
                    </ul>
                </div>
            </div>
            <Parceiros/>
        </>    
    )
}

export default Carros