import React from "react";
import './pages.css';
import Perguntas from "../perguntas/Perguntas";

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

export default function Pagina2 ({
        tela, setTela
    }) {

    let novoItem = [
        {paragrafo: "Pergunta 1", play:"play-outline"},
        {paragrafo: "Pergunta 2", play:"play-outline"},
        {paragrafo: "Pergunta 3", play:"play-outline"},
        {paragrafo: "Pergunta 4", play:"play-outline"},
    ]

    return (
        <>
            <div className="paginaZapReacall ">
                <div className="conteudo">
                    <div className="logoMarca" onClick={() => setTela(!tela)}>
                        <img src="./imagens/iconeLogo.svg" />
                        <h1>ZapRecall</h1>
                    </div>
                    <div className="galeriaDePerguntas invisivel">
                        {novoItem.map((item) => <GaleriaDePerguntas paragrafo={item.paragrafo} play={item.play}/>)}
                    </div>
                    <Perguntas />
                </div>
                <div className="barraInferior">
                    <p>0/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    );
}