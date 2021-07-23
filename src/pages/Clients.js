import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

export default function SingIn() {
   return (
      <div className="card-container">
         <form className="card-content">
            <h2>Cadastro de clientes</h2>
            <p>Preencha os dados corretamente.</p>
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="Digite seu nome completo"></input>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" placeholder="Digite seu cpf"></input>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Digite seu email"></input>
            <label htmlFor="telefone">Telefone</label>
            <input id="telefone" type="tel" placeholder="Digite seu telefone com o DDD"></input>

            <button type="submit" className="card-button-cadastrar">Cadastrar cliente</button>
            <Link className="card-button-voltar" to="/"> &lt; Voltar</Link>
         </form>
      </div>
   )
}