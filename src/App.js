//Crie um component de class

//Crie um array de objetos no STATE com pelo menos 6 objetos

//Faça um map do seu state e exiba os dados na tela

import React, { Component } from "react";

export default class App extends Component {
  state = {
    cadastro: [
      { nome: "Lusia", idade: 20, signo: "Aries" },
      { nome: "Ana Carla", idade: 22, signo: "Touro" },
      { nome: "Mirella", idade: 25, signo: "Gemeos" },
      { nome: "Amanda", idade: 30, signo: "Cancer" },
      { nome: "Katia", idade: 28, signo: "Peixes" },
      { nome: "Helena", idade: 27, signo: "Leão" }
    ]
  };

  render() {
    return (
      <div>
        {this.state.cadastro.map((item) => (
          <p>
            Meu nome é {item.nome}, minha idade é {item.idade} e meu signo é{" "}
            {item.signo}.
          </p>
        ))}
      </div>
    );
  }
}
