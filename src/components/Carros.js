import Img from './imgs/porshe.jpg'
import Parceiros from './Parceiros'

function Carros(){
    return(
        <>
            <div className='container-principal'>
                <div className='div-pric-carro'>
                    <img className='img-porshe' src={Img} alt="Imagem de uma porshe"></img>
                </div>
                <div className='div-modelos'>
                    <ul className='lista-carros'>
                        <div className='cont-carros1'>
                            <div className='div-ferrari'>
                                <li className='nomeCar'>Ferrari 812 GTS</li>
                            </div>
                            <div className='div-camaro'>
                                <li className='nomeCar'>Camaro Amarelo</li>
                            </div>
                        </div>
                        <div className='cont-carros2'>  
                            <div className='div-bugatti'>
                                <li className='nomeCar'>Bugatti Veyron</li>
                            </div>
                            <div className="div-porsheMacan">
                                <li className='nomeCar'>Porsche Macan</li>
                            </div>
                        </div>   
                    </ul>
                </div>
            </div>
            <Parceiros/>
        </>    
    )
}

export default Carros