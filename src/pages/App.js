export default function App() {
    return (
        <div className="paginaZapReacall">
            <div className="conteudo">
                <div className="logoMarca">
                    <img src="./imagens/iconeLogo.svg" />
                    <h1>ZapRecall</h1>
                </div>
                <div className="galeriaDePerguntas">
                    <div className="pergunta">
                        <p>Pergunta 1</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 2</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 3</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                    <div className="pergunta">
                        <p>Pergunta 4</p>
                        <ion-icon name="play-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div className="barraInferior">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </div>
    );
}