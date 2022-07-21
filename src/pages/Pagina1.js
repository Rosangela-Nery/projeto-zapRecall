import React from "react";
import './pages.css';

export default function Pagina1 ({
    tela, setTela
}) {

    return (
        <>
            <div className="pagina1">
                <div className="paginaDeBoasVindas">
                    <div className="logoMarca" onClick={() => setTela(!tela)}>
                        <img src="./imagens/iconeLogo.svg" />
                        <h1>ZapRecall</h1>
                    </div>
                    <button onClick={() => setTela(!tela)}>Iniciar Recall!</button>
                </div>
            </div>
        </>
    );
}