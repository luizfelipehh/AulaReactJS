import React, { Component } from 'react';

import { Button, Input } from 'reactstrap';
import { Prompt } from 'react-router-dom';

import { setAutenticado } from '../Utils/LoginManager';

class LoginPage extends Component {

  onLoginClick = () => {
    setAutenticado(true);
    this.props.history.push('/');
  }

  onInputChange = event => {
      const { name, value} = event.target
      console.log(name, value);
      this.setState({
          [name]: value
      })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Prompt
          when={true}
          message="Deseja sair do Login?"
        />
        <Input type="text" name="usuario" onChange={this.onInputChange} />
        <Input type="password" name="senha" onChange={this.onInputChange}/>
        <Button onClick={this.onLoginClick}>
          Entrar
        </Button>
      </div>
    )
  }
}

export default LoginPage;
