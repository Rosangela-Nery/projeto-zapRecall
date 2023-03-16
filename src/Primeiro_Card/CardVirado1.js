import React from "react";
import '../pages/pages.css';
import GaleriaDeCards  from "./GaleriaDeCards";

export default function CardVirado1 ({
    setBarra, numero, setNumero
}) {

    let itens = [
        {
            "id": 1,
            "title": "Pergunta",
            "pergunta": "Quem foi a primeira pessoa a viajar no Espaço?",
            "resposta": "O russo Yuri Gagarin (1934-1968) foi a primeira pessoa a viajar para o espaço, o que aconteceu em 12 de abril de 1961.",
        },
        {
            "id": 2,
            "title": "Pergunta",
            "pergunta": "Qual a montanha mais alta do mundo?",
            "resposta": "O Monte Everest tem 8.848 metros de altitude e localiza-se no Nepal, um país asiático que faz fronteira com a China e com a Índia.",
        },
        {
            "id": 3,
            "title": "Pergunta",
            "pergunta": "Onde se localiza Machu Picchu?",
            "resposta": "Machu Picchu localiza-se no Peru, país da América do Sul que faz fronteira com o Brasil.",
        },
        {
            "id": 4,
            "title": "Pergunta",
            "pergunta": "Que país tem o formato de uma bota?",
            "resposta": "No mapa da Europa, a Itália se destaca por parecer uma bota de cano e salto altos.",
        },
        {
            "id": 5,
            "title": "Pergunta",
            "pergunta": "Quem inventou a lâmpada?",
            "resposta": "A lâmpada foi inventada por Thomas Edison (1847-1931) em 1879. No dia 21 de outubro, o inventor conseguiu manter uma lâmpada acessa durante 48 horas.",
        },
        {
            "id": 6,
            "title": "Pergunta",
            "pergunta": "Quanto tempo a Terra demora para dar uma volta completa em torno dela mesma?",
            "resposta": "A Terra demora aproximadamente 24 horas, mais precisamente 23 horas, 56 minutos e 4 segundos para dar uma volta completa em torno do seu próprio eixo. Esse movimento recebe o nome de rotação.",
        },
        {
            "id": 7,
            "title": "Pergunta",
            "pergunta": "Quais são as fases da Lua?",
            "resposta": "As fases da lua são quatro: nova, crescente, cheia e minguante. Cada uma delas dura 7 ou 8 dias.",
        },
        {
            "id": 8,
            "title": "Pergunta",
            "pergunta": "Qual o maior planeta do sistema solar?",
            "resposta": "Júpiter é 1300 vezes maior que a Terra, sendo o maior planeta do sistema solar.",
        }
    ]


    return (
        <>
            <GaleriaDeCards itens={itens} setBarra={setBarra}  setNumero={setNumero} numero={numero}/>
        </>
    );
}