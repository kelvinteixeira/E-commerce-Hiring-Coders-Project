import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import InputMask from 'react-input-mask'
import Logo from '../assets/Vtex-logo.png'

export default function SingIn() {
   const [nome, setNome] = useState('')
   const [cpf, setCpf] = useState('')
   const [email, setEmail] = useState('')
   const [telefone, setTelefone] = useState('')


   return (
      <div className="card-container">
         <form className="card-content">
            <img src={Logo} alt="Vtex-logo" className="logo-cadastro"></img>
            <h2>Cadastro de clientes</h2>
            <p>Preencha os dados corretamente.</p>
            <label  className="label-client" htmlFor="nome">Nome</label>
            <InputMask value={nome} onChange={(e)=> setNome(e.target.value)} className="input-client" id="nome" type="text" placeholder="Digite seu nome completo"></InputMask>
            <label className="label-client"  htmlFor="cpf">CPF</label>
            <InputMask value={cpf} onChange={(event) => setCpf(event.target.value)} className="input-client" mask="999.999.999-99" id="cpf" type="text" placeholder="Digite seu cpf"></InputMask>
            <label className="label-client"  htmlFor="email">Email</label>
            <InputMask value={email} onChange={(e) => setEmail(e.target.value)} className="input-client" id="email" type="email" placeholder="Digite seu email"></InputMask>
            <label className="label-client"  htmlFor="telefone">Telefone</label>
            <InputMask value={telefone} onChange={(event) => setTelefone(event.target.value)} mask="(99) 9 9999-9999" className="input-client" id="telefone" type="tel" placeholder="Digite seu telefone com o DDD"></InputMask>

            <button type="submit" className="card-button-cadastrar-client">Cadastrar cliente</button>
            <Link className="card-button-voltar" to="/"> &lt; Voltar</Link>

            
         </form>
         
      </div>
   )
}