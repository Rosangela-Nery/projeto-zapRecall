import React from 'react';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';

export default function App() {

    const [tela, setTela] = React.useState(true);

    return (
        <>
            <>
                {tela ? (
                    <Pagina1 tela={tela} setTela={setTela}/>
                ) : (
                    <Pagina2 tela={tela} setTela={setTela}/>
                )}
            </>
        </>
    );
}