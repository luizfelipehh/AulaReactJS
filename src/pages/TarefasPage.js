import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

const TAREFAS = [ 
    {
        id: 1,
        titulo: 'Aprender React',
        descricao: ' lalalalallaalal'
    },
    {
        id: 2,
        titulo: 'Aprender JS',
        descricao: ' JSJSJSJSJSJSJSJSJS'
    },
    {
        id: 3,
        titulo: 'Aprender React-Router',
        descricao: ' reactreactreactreactreactreact'
    },

]

class TarefasPage extends Component {
    render(){
        const tarefasLinks = TAREFAS.map((tarefa, index) => {
            return(
                <li>
                    <Link to={'/tarefas/' + tarefa.id}>
                      {tarefa.titulo}
                    </Link>
                </li>
            )
        })
        return (
            <div>
                <h1>Tarefas</h1>
                <ul>           
                    {tarefasLinks}                
                </ul>
                <Route 
                path="/tarefas/:tarefasId"
                render={props => {
                    const tarefaId = props.match.params.tarefaId;
                    const tarefa = TAREFAS.find(tar => tar.id == tarefaId);
                  return(
                      <div>
                          {tarefa.descricao}
                      </div>
                  )
                }} >
                
                </Route>
            </div>
        )
    }
}

export default TarefasPage;