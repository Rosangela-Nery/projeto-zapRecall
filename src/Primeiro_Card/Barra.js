import React from "react";
import '../pages/pages.css';
import certo from '../imagens/certo.svg';
import erro from '../imagens/x.svg';
import orange from '../imagens/laranja.svg';



export default function Barra(props) {



    return (
        <div className="barraInferior">
            <p>{props.numero}/8 CONCLUÍDOS</p>
            <p>{props.barra.map((icone) => {
                if(icone === 'vermelho') {
                    return <img src={erro}></img>
                }
                if(icone === 'laranja') {
                    return <img src={orange}></img>
                }
                if(icone === 'verde') {
                    return <img src={certo}></img>
                }
            })}</p>
        </div>
    );
}