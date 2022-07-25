import React from 'react';
import '../pages/pages.css';
import recarregar from '../imagens/recarregar.svg';
import certo from '../imagens/certo.svg';
import erro from '../imagens/x.svg';
import orange from '../imagens/laranja.svg';

function QualEOCard (props) {
    const [clicar, setClicar] = React.useState(true);
    const [virar, setVirar] = React.useState(true);
    const [vermelho, setVermelho] = React.useState(true);
    const [laranja, setLaranja] = React.useState(true);
    const [verde, setVerde] = React.useState(true);

    return (
        <>
            {clicar ? (
                <div className="pergunta">
                    <p>{props.title}</p>
                    <ion-icon name="play-outline" onClick={() => setClicar(!clicar)}></ion-icon>
                </div>
            ) : (
                <> 
                    {virar ? (
                        <div className="perguntas">
                            <p>{props.pergunta}</p>
                            <img src={recarregar} onClick={() => setVirar(!virar)}></img>
                        </div>
            ) : (
                <>
                    {vermelho ? (
                        <>
                            {verde ? (
                                <>
                                {laranja ? (
                                    <div className="resposta">
                                    <p>{props.resposta}</p>
                                    <div className="status">
                                        <div className="vermelho" onClick={() => setVermelho(!vermelho)}>
                                            <p>Não lembrei</p>
                                        </div>
                                        <div className="laranja" onClick={() => setLaranja(!laranja)}>
                                            <p>Quase esqueci</p>
                                        </div>
                                        <div className="verde" onClick={() => setVerde(!verde)}>
                                            <p>Zap!</p>
                                        </div>
                                    </div>
                                </div>
                                ) : (
                                    <div className="perguntaLaranja">
                                        <p>{props.title}</p>
                                        <img src={orange}></img>
                                    </div>
                                )}
                                </>
                                ) : (
                                    <div className="perguntaVerde">
                                        <p>{props.title}</p>
                                        <img src={certo}></img>
                                    </div>
                                )} 
                        </>
                    ) : ( 
                    <div className="perguntaVermelha">
                        <p>{props.title}</p>
                        <img src={erro}></img>
                    </div>
                    )}
                </>
             )}
                </>
            )}

        </>
    );
}

export default function GaleriaDeCards (props) {

    return (
        <>
            {props.itens.map((item, index) => (<QualEOCard index={index} title={item.title} pergunta={item.pergunta} resposta={item.resposta}/>))}
        </>
    );
}