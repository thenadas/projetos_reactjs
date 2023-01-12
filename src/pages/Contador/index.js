import { useState } from 'react';
import './style.css';

export default function Contador(){

    const[contador, setContador] = useState(0);

    function diminuir(){
        if(contador === 0){
            alert('Ops... não pode diminuir mais esse número.');
            return;
        }
        setContador(contador -1);
    }

    return(
        <div className="container">
            <h1>Projeto Contador</h1>
            <strong>{contador}</strong>
            <div className="container-btn">
                <button onClick={() => setContador(contador + 1)}>Aumentar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        </div>
    )
}