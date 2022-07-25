import React from "react";
import '../pages/pages.css';
import GaleriaDeCards  from "./GaleriaDeCards";

export default function CardVirado1 ({
    setBarra, numero, setNumero
}) {

    let itens = [
        {
            title: "Pergunta",
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScripts",
        },
        {
            title: "Pergunta",
            pergunta: "O que é React?",
            resposta: "Uma biblioteca JavaScript para construção de interfaces",
        },
        {
            title: "Pergunta",
            pergunta: " Componentes devem iniciar com __ ",
            resposta: " A letra maiúscula",
        },
        {
            title: "Pergunta",
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: " Expressões",
        },
        {
            title: "Pergunta",
            pergunta: "O ReactDOM nos ajuda __ ",
            resposta: " Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            title: "Pergunta",
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            title: "Pergunta",
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes ",
        },
        {
            title: "Pergunta",
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]

    const item = itens.sort(() => Math.random() - 0.4);

    return (
        <>
            <GaleriaDeCards  itens={itens} setBarra={setBarra}  setNumero={setNumero} numero={numero}/>
        </>
    );
}