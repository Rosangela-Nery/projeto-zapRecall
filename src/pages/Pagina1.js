import React from "react";
import iconeLogo from '../imagens/iconeLogo.svg';
import '../pages/pages.css';

export default function Pagina1 ({
    tela, setTela
}) {

    return (
        <>
            <div className="pagina1">
                <div className="paginaDeBoasVindas">
                    <div className="logoMarca logo">
                        <img src={iconeLogo} />
                        <h1>ZapRecall</h1>
                    </div>
                    <button onClick={() => setTela(!tela)}>Iniciar Recall!</button>
                </div>
            </div>
        </>
    );
}