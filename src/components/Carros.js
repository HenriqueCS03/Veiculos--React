import Img from './imgs/porshe.jpg'
import Parceiros from './Parceiros'

function Carros(){
    return(
        <>
            <div className='container-principal'>
                <div>
                    <img className='img-porshe' src={Img} alt="Imagem de uma porshe"></img>
                </div>
                <div className='div-modelos'>
                    <ul className='lista-carros'>
                        <div>
                            <div className='div-porsheMacan'>
                                <li>Porsche Macan</li>
                            </div>
                            <div className='div-camaro'>
                            <li>Camaro Amarelo</li>
                            </div>
                        </div>
                        <div>  
                            <div className='div-bugatti'>
                            <li>Bugatti Veyron</li>
                            </div>
                            <div>
                            <li>Ferrari 812 GTS</li>
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