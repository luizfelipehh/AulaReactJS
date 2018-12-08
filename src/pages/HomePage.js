import React, { Component } from 'react';

import Artigo from '../components/Artigo.js';
import Contador from '../components/Contador.js';

import { Alert, Container, Button} from 'reactstrap';

class HomePage extends Component {
    render(){
        return (
            <div>           
            <Alert color="primary"> Ola mundo </Alert>
          
            <Alert color="danger"> ola mundo </Alert>
  
            <button color="primary">APERTE AQUI E TENHA UMA SURPRISE!</button>
  
            <Artigo
              nome="Douglas"
              texto="Programação Web com React JS"
            />
  
            <Artigo
              nome="Burnes"
              texto="Programação Web com PHP"
            />
  
            <Contador tempo={500} />
            <Contador />
             </div>
        )
    }
}

export default HomePage;