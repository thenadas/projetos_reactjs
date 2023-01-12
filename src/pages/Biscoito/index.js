import { useState } from 'react';

import ImgBiscoito from '../../assets/biscoitoDaSorte.png';
import './style.css';

export default function Biscoito(){

    const[frase, setFrase] = useState([]);

    let frasesTexto = ['Não há que ser forte. Há que ser flexível.', 'A juventude não é uma época da vida, é um estado de espírito.'
    ,'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.', 'Uma bela flor é incompleta sem as suas folhas', 'Os defeitos são mais fortes quando o amor é fraco.'];

    function AbrirBiscoito(){
        let numeroAleatório = Math.floor(Math.random() * frasesTexto.length);
        setFrase(frasesTexto[numeroAleatório])
    }

    return(
        <div className='container'>
            <h1 className='titulo-biscoito'>Projeto Biscoito da Sorte</h1>
            <img src={ImgBiscoito} alt='Imagem biscoito da Sorte' className='imgBiscoito'/>
            <button onClick={AbrirBiscoito}>Abrir Biscoito</button>
            <p>{frase}</p>
        </div>
    )
}