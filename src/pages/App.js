import React, { Component } from 'react';

import { Container, Nav, NavItem } from 'reactstrap';

import Menu from '../components/Menu';

import {
  BrowserRouter,
  Link,
  Route
 } from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import LoginPage from './LoginPage';

import PrivateRoute from '../components/PrivateRoute';
import {isAutenticado,setAutenticado} from '../Utils/LoginManager';

class App extends Component {
  onSairClick = () => {
    setAutenticado(false);
    this.forceUpdate();
  }

  render() {
    return (
      <BrowserRouter>
        <Container>   
          <Menu />      
          
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/tarefas" component={TarefasPage}/>
          <Route path="/sobre" component={SobrePage} />
          <Route path="/login" component={LoginPage} />      
        </Container>
      </BrowserRouter>
      
    );
  }
}

export default App;
