import React from 'react';

class Contador extends React.Component {

    static defaultProps = {
        tempo: 1000,
        numero : 0
    }

    constructor(props){//quando a classse for component é obrigatório passar o parâmetro props
        super(props);
        
        this.state = { //cria-se aqui a parte que quer ser atualizado toda vez que mudar algo na página
            numero: props.numero,
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                numero: this.state.numero + 1
            })
        }, this.props.tempo);
    }

    componentDidUpdate(oldProps, oldState){
        console.log('componentDidUpdate');
        console.log('numero anterior: ', oldState.numero);
        console.log('numero atual:', this.state.numero);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>{this.state.numero}</p>
        );
    }

}

export default Contador;
