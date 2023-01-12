import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biscoito from "./pages/Biscoito";
import Home from "./pages/Home";
import Contador from "./pages/Contador";
import Tarefas from "./pages/Tarefas";

import Error from "./pages/Error";
import Header from "./components/Header";

export default function RoutesApp(){
    return(
        <BrowserRouter>
        <Header nome='Seja bem vindo'/>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/biscoito' element={ <Biscoito />} />
                <Route path='/contador' element={ <Contador />} />
                <Route path='/tarefas' element={ <Tarefas />} />

                <Route path='*' element={ <Error />} />
            </Routes>
        </BrowserRouter>
    )
}