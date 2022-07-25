import React from 'react';
import '../pages/pages.css';
import recarregar from '../imagens/recarregar.svg';
import certo from '../imagens/certo.svg';
import erro from '../imagens/x.svg';
import orange from '../imagens/laranja.svg';


function QualEOCard (props) {
    const [clicar, setClicar] = React.useState(false);
    const [virar, setVirar] = React.useState(false);
    const [resposta, setResposta] = React.useState(false);
    const [finalizado, setFinalizado] = React.useState(false);

    const imagens = {
        perguntaVermelha: erro,
        perguntaLaranja: orange,
        perguntaVerde: certo,
    }


    if(clicar && virar && (finalizado)) {
        return <div className={resposta}>
                    <p>{props.title}</p>
                    <img src={imagens[resposta]}></img>
                </div>
    }

    if(clicar && virar) {
        return <div className="resposta">
            <p>{props.resposta}</p>
            <div className="status">
                <div className="vermelho" onClick={() => {
                    setResposta('perguntaVermelha');
                    setFinalizado(true);
                    props.setBarra((data) => [...data, "vermelho"]);
                    props.setNumero(props.numero + 1);
                    }}>
                    <p>Não lembrei</p>
                </div>
                <div className="laranja" onClick={() => {
                    setResposta('perguntaLaranja');
                    setFinalizado(true);
                    props.setBarra((data) => [...data, "laranja"]);
                    props.setNumero(props.numero + 1);
                    }}>
                    <p>Quase esqueci</p>
                </div>
                <div className="verde" onClick={() => {
                    setResposta('perguntaVerde');
                    setFinalizado(true);
                    props.setBarra((data) => [...data, "verde"]);
                    props.setNumero(props.numero + 1);
                    }}>
                    <p>Zap!</p>
                </div>
            </div>
        </div>
    }

    if(!clicar) {
        return <div className="pergunta">
            <p>{props.title}</p>
            <ion-icon name="play-outline" onClick={() => setClicar(true)}></ion-icon>
            </div>
    }

    if(!virar) {
        return <div className="perguntas">
                    <p>{props.pergunta}</p>
                    <img src={recarregar} onClick={() => setVirar(true)}></img>
              </div>
    }
}


export default function GaleriaDeCards (props) {

    return (
        <>
            {props.itens.map((item, index) => (<QualEOCard index={index} title={item.title} pergunta={item.pergunta} resposta={item.resposta} setBarra={props.setBarra} setNumero={props.setNumero} numero={props.numero}/>))}
        </>
    );
}