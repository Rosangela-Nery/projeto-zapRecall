import Pagina2 from "./Pagina2";
import React from "react";

export default function Pagina1 () {

    const [tela, setTela] = React.useState(true);

    return (
        <>
            {tela ? (
                <div className="pagina1">
                    <div className="paginaDeBoasVindas">
                        <img src="./imagens/iconeLogo.svg" />
                        <h1>ZapRecall</h1>
                        <button onClick={() => setTela(!tela)}>Iniciar Recall!</button>
                    </div>
                </div>
            ) : (
                <Pagina2 />
            )}
        </>
    );
}