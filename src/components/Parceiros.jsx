import ImgInst from "./imgs/instagram-icon.png"
import ImgGit from "./imgs/github-icon.png"
import ImgLin from "./imgs/linkedin-icon.png"

function Parceiros(){
    const link1 = "https://www.instagram.com/r_cesinhaz/"
    const link2 = "https://github.com/HenriqueCesarS"
    const link3 = "https://www.linkedin.com/in/henrique-cesar-869706230/"
    return(
        <section className="container-parceiros">
            <h2>Parcerias: </h2>
            <div className="div-links">
                <nav>
                    <a href={link1}><img className="icone" src={ImgInst} alt="Icone Instagram"></img></a>
                    <a href={link2}><img className="icone" src={ImgGit} alt="Iconi GitHub"></img></a>
                    <a href={link3}><img className="icone" src={ImgLin} alt="Icone Linkedin"></img></a> 
                </nav>
            </div>    
        </section>
    )
}

export default Parceiros