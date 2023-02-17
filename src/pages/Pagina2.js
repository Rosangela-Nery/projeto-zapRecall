import React from "react";
import iconeLogo from '../imagens/iconeLogo.svg';
import '../pages/pages.css';
import CardVirado1 from "../Primeiro_Card/CardVirado1";
import Barra from "../Primeiro_Card/Barra";

export default function Pagina2 ({
        tela, setTela
    }) {

        const [barra, setBarra] = React.useState([]);
        const [numero, setNumero] = React.useState(0);

    return (
        <>
            <div className="paginaZapReacall ">
                <div className="conteudo">
                    <div className="logoMarca" onClick={() => setTela(!tela)}>
                        <img src={iconeLogo} title="" />
                        <h1>ZapRecall</h1>
                    </div>
                    <div className="galeriaDePerguntas">
                        <CardVirado1 setBarra={setBarra} setNumero={setNumero} numero={numero}/>
                    </div>
                </div>
                    <Barra barra={barra} numero={numero}/>
            </div>
        </>
    );
}