import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

import Entrar from './pages/Entrar'
import Tarefas from './pages/Tarefas'

export default function Routes() {
return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Entrar}/>
            <Route path="/Tarefas" exact component={Tarefas}/>
        </Switch>
    </BrowserRouter>
)}