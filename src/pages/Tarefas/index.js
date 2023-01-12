import { useEffect, useState } from "react";
import './style.css';

export default function Tarefas(){

    const[tarefa, setTarefa] = useState([]);
    const[input, setInput] = useState('');


    useEffect(() => {
        const tarefasStorage = localStorage.getItem('@tarefas');

        if(tarefasStorage){
            setTarefa(JSON.parse(tarefasStorage));
        }
    },[])

    useEffect(() =>{
        localStorage.setItem('@tarefas', JSON.stringify(tarefa));
    },[tarefa])


    function AddTarefa(){
        if(input === ''){
            alert('Por favor, digite alguma tarefa');
            return;
        }
        setTarefa([...tarefa, input]);
        setInput('');
    }

    return(
        <div className="container">
            <h1>Projeto Tarefas</h1>
            <ul>
                {tarefa.map(tarefa =>{
                    return(
                        <li key={tarefa}>
                            {tarefa}
                        </li>
                    )
                })}
            </ul>
            <input placeholder="Digite alguma tarefa" type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button className="btn-tarefa" onClick={AddTarefa}>Adicionar tarefas</button>
        </div>
    )
}