import React from "react";
import iconeLogo from '../imagens/iconeLogo.svg';
import '../pages/pages.css';
import CardVirado1 from "../Primeiro_Card/CardVirado1";

export default function Pagina2 ({
        tela, setTela
    }) {

    return (
        <>
            <div className="paginaZapReacall ">
                <div className="conteudo">
                    <div className="logoMarca" onClick={() => setTela(!tela)}>
                        <img src={iconeLogo} />
                        <h1>ZapRecall</h1>
                    </div>
                    <div className="galeriaDePerguntas">
                        <CardVirado1 />
                    </div>
                </div>
                <div className="barraInferior">
                    <p>0/4 CONCLUÍDOS</p>
                </div>
            </div>
        </>
    );
}