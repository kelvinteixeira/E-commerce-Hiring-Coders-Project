import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import Logo from '../assets/Vtex-logo.png'

export default function Home() {
   
   return (
      <div className="card-container">
         <div className="card-content">
            <img className="logo" src={Logo} alt="logo-vtex"></img>
            <h2>Gestão de Cadastros</h2>
            <p>Sistema exclusivo para o gerenciamento de cadastro, escolha abaixo se você deseja cadastrar novos clientes ou novos produtos.</p>
            <Link className="card-button-client" to="/clients" >Clientes</Link>
            <Link className="card-button-product" to="/products" >Produtos</Link>
         </div>
      </div>


   )
}