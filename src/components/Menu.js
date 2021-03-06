import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';

import { isAutenticado,setAutenticado } from '../Utils/LoginManager';

import {
    isAutenticado, setAutenticado
} from '../Utils/LoginManager';

const Menu = (props) => {
    return(
        <Nav>
    <NavItem>
        <Link className="nav-link" to="/">
        Home
        </Link> 
    </NavItem>
    <NavItem>
        <Link className="nav-link" to="/tarefas">
        Tarefas
        </Link> 
    </NavItem>
    <NavItem>
        <Link className="nav-link" to="/sobre">
        Sobre   
        </Link> 
    </NavItem>
    { isAutenticado() ? (
        <NavItem>
        <NavLink 
         onClick={()=> {
             setAutenticado(false);
             props.history.push('/');
         }}>
          Sair
         </NavLink>       
       
    </NavItem>
    ) :null} 
    
</Nav>
)
} 

export default withRouter(Menu);