import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: null,
            email: '',
            senha: ''
        };
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.auth = this.auth.bind(this);
        this.sair = this.sair.bind(this);
        // firebase.auth().signOut(); // deslogar do sistema

    }

    componentDidMount() {
        this.auth();
    }

    auth() {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.setState({user: user});
            }
        });
    }
    logar() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error) => {
                alert('codigo de erro' + error.code)
        });
    }
    sair() {
        firebase.auth().signOut().then(() =>{
            this.setState({user: null});
            alert('Deslogado com sucesso.')
        })
    }


    cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .catch((error) => {
                alert('codigo de erro' + error.code)
        });

    }
    render() {

        return(
            <div>
                {this.state.user ?
                <div>
                    <h3>Painel Admin</h3>
                    <p>Seja bem vindo!</p>
                    <p>{this.state.user.email}</p>
                    <button onClick={this.sair}>Deslogar</button>
                </div> 
                :
                <div>
                    <h1>Seja bem vindo</h1>
                    <label>Email:</label>
                    <br />
                    <input type="text" value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})}></input>
                    <br />

                    <label>Senha:</label>
                    <br />
                    <input type="password" value={this.state.senha} 
                    onChange={(e) => this.setState({senha: e.target.value})}></input>
                    <br />
                    <br />

                    <button onClick={this.cadastrar}>Cadastrar</button>
                    <button onClick={this.logar}>Logar</button>
                </div>
                }
                

                
            </div>
        );
    }
}