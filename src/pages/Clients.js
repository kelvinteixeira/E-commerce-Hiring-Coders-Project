import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import InputMask from 'react-input-mask'
import Logo from '../assets/Vtex-logo.png'

export default function SingIn() {
   const [cpf, setCpf] = useState('')
   const [telefone, setTelefone] = useState('')

   return (
      <div className="card-container">
         <form className="card-content">
            <img src={Logo} alt="Vtex-logo" className="logo-cadastro"></img>
            <h2>Cadastro de clientes</h2>
            <p>Preencha os dados corretamente.</p>
            <label htmlFor="nome">Nome</label>
            <InputMask className="camp" id="nome" type="text" placeholder="Digite seu nome completo"></InputMask>
            <label htmlFor="cpf">CPF</label>
            <InputMask value={cpf} onChange={(event) => setCpf(event.target.value)} className="camp" mask="999.999.999-99" id="cpf" type="text" placeholder="Digite seu cpf"></InputMask>
            <label htmlFor="email">Email</label>
            <InputMask className="camp" id="email" type="email" placeholder="Digite seu email"></InputMask>
            <label htmlFor="telefone">Telefone</label>
            <InputMask value={telefone} onChange={(event) => setTelefone(event.target.value)} mask="(99) 99999-9999" className="camp" id="telefone" type="tel" placeholder="Digite seu telefone com o DDD"></InputMask>

            <button type="submit" className="card-button-cadastrar">Cadastrar cliente</button>
            <Link className="card-button-voltar" to="/"> &lt; Voltar</Link>

            
         </form>
         
      </div>
   )
}