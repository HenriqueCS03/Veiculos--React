function Parceiros(){
    const link1 = "https://www.instagram.com/r_cesinhaz/"
    const link2 = "https://github.com/HenriqueCesarS"
    const link3 = "https://www.linkedin.com/in/henrique-cesar-869706230/"
    return(
        <section className="container-parceiros">
            <h2>Parceria: </h2>
            <div className="div-links">
                <nav>
                    <a href={link1}>Instagram</a>
                    <a href={link2}>GitHub</a>
                    <a href={link3}>Linkdin</a> 
                </nav>
            </div>    
        </section>
    )
}

export default Parceiros