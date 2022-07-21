import React from 'react';
import './cards.css';

function CardsPerguntas({
    pergunta, img
}) {
    return (
        <div className="perguntas">
            <p>{pergunta}</p>
            <img src={img}/>
        </div>
    );
}

export default function Perguntas () {

    let itens = [
        {pergunta: "O que é JSX?", img: "./imagens/recarregar.svg"},
        {pergunta: "O que é React?", img: "./imagens/recarregar.svg"},
        {pergunta: "Usamos props para?", img: "./imagens/recarregar.svg"},
        {pergunta: "Os componentes devem iniciar com a letra maiúscula ou minúscula?", img: "./imagens/recarregar.svg"}
    ];

    return (
        <>
            <div className="conteudo">
                {itens.map((item) => <CardsPerguntas pergunta={item.pergunta} img={item.img}/>)}
            </div>
        </>
    );
}