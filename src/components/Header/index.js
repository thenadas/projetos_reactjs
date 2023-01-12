import { Link } from 'react-router-dom';
import './style.css';

export default function Header(props){
    return(
        <div className='container-header'>
            <h1>{props.nome}</h1>
            <Link className='btn-voltar' to='/'>Voltar ao menu</Link>
        </div>
    )
}