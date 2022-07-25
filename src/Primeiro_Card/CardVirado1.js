import React from "react";
import '../pages/pages.css';
import Pergunta from "./Pergunta";

export default function CardVirado1 () {

    let itens = [
        {
            title: "Pergunta 1",
            pergunta: "O que é JSX?",
            resposta: "Uma extensão de linguagem do JavaScripts",
        },
        {
            title: "Pergunta 2",
            pergunta: "O que é React?",
            resposta: "Uma biblioteca JavaScript para construção de interfaces",
        },
        {
            title: "Pergunta 3",
            pergunta: "Componentes devem iniciar com a letra maiúscula ou minúscula?",
            resposta: " A letra maiúscula",
        },
        {
            title: "Pergunta 4",
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: " Expressões",
        },
        {
            title: "Pergunta 5",
            pergunta: "O ReactDOM nos ajuda __ ",
            resposta: " Interagindo com a DOM para colocar componentes React na mesma",
        },
        {
            title: "Pergunta 6",
            pergunta: "Usamos o npm para __",
            resposta: "gerenciar os pacotes necessários e suas dependências",
        },
        {
            title: "Pergunta 7",
            pergunta: "Usamos props para __",
            resposta: "passar diferentes informações para componentes ",
        },
        {
            title: "Pergunta 8",
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        }
    ]

    return (
        <>
            <Pergunta itens={itens}/>
        </>
    );
}