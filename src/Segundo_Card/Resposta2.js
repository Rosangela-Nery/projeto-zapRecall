import React from "react";
import '../pages/pages.css';

function QualEAResposta (props) {

    return (
        <>
            <div className="resposta">
                <p>{props.resposta}</p>
                <div className="status">
                    <div className="vermelho">
                        <p>Não lembrei</p>
                    </div>
                    <div className="laranja">
                        <p>Quase esqueci</p>
                    </div>
                    <div className="verde">
                        <p>Zap!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Resposta2 (props) {
    return (
        <>
            {props.itens.map((item) => (<QualEAResposta resposta={item.resposta}/>))}
        </>
    );
}