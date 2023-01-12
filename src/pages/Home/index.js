import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className='container'>
            <h1>Projetos ReactJS</h1>
            <Link to='/biscoito'>Projeto Biscoito da Sorte</Link>
            <Link to='/contador'>Projeto Contador</Link>
            <Link to='/tarefas'>Projeto Tarefas</Link>
        </div>
    )
}