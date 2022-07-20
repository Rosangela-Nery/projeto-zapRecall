import React from "react";
import Pagina1 from "./Pagina1";

function GaleriaDePerguntas (
    { paragrafo, play}
) {
    return (
        <div className="pergunta">
            <p>{paragrafo}</p>
            <ion-icon name={play}></ion-icon>
        </div>
    );
}

export default function Pagina2 () {

    let novoItem = [
        {paragrafo: "Pergunta 1", play:"play-outline"},
        {paragrafo: "Pergunta 2", play:"play-outline"},
        {paragrafo: "Pergunta 3", play:"play-outline"},
        {paragrafo: "Pergunta 4", play:"play-outline"},
    ]

    const [inicio, setInicio] = React.useState(true);

    return (
        <>
            {inicio ? (
                <div className="paginaZapReacall ">
                    <div className="conteudo">
                        <div className="logoMarca" onClick={() => setInicio(!inicio)}>
                            <img src="./imagens/iconeLogo.svg" />
                            <h1>ZapRecall</h1>
                        </div>
                        <div className="galeriaDePerguntas">
                            {novoItem.map((item) => <GaleriaDePerguntas paragrafo={item.paragrafo} play={item.play}/>)}
                        </div>
                    </div>
                    <div className="barraInferior">
                        <p>0/4 CONCLUÍDOS</p>
                    </div>
                </div>
            ) : (
                <Pagina1 />
            )}
            
        </>
    );
}