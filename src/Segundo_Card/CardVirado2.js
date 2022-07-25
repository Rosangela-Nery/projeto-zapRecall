import React from "react";
import '../pages/pages.css';
import Pergunta2 from "./Pergunta2";
import Resposta2 from "./Resposta2";

export default function CardVirado2 () {

    let itens = [
        {
            title: "Pergunta 2",
            pergunta: "O que é React?",
            resposta: "Uma biblioteca JavaScript para construção de interfaces",
        }
    ]

    const [virar, setVirar] = React.useState(true);

    return (
        <>
            {virar ? (
                <Pergunta2 itens={itens} virar={virar} setVirar={setVirar}/>
            ) : (
                <Resposta2 itens={itens}/>
            )}
        </>
    );
}