import React from 'react';
import '../pages/pages.css';
import recarregar from '../imagens/recarregar.svg';

function QualEAPergunta (props) {
    const [clicar, setClicar] = React.useState(true);

    return (
        <>
            {clicar ? (
                <div className="pergunta">
                    <p>{props.title}</p>
                    <ion-icon name="play-outline" onClick={() => setClicar(!clicar)}></ion-icon>
                </div>
            ) : (
                <div className="perguntas">
                    <p>{props.pergunta}</p>
                    <img src={recarregar} onClick={() => props.setVirar(!props.virar)}></img>
                </div>
            )}
        </>
    );
}

export default function Pergunta2(props) {

    return (
        <>
            {props.itens.map((item) => (<QualEAPergunta title={item.title} pergunta={item.pergunta} virar={props.virar} setVirar={props.setVirar}/>))}
        </>
    );
}