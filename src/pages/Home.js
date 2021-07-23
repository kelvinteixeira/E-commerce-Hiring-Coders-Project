import React from 'react'
import { useHistory } from 'react-router-dom'
import '../style.css'
import Logo from '../assets/Vtex-logo.png'

export default function Home() {
   const history = useHistory()

   function newClient() {
      history.push('/clients')
   }

   function newProduct() {
      history.push('/products')
   }
   
   return (
      <div className="card-container">
         <div className="card-content">
            <img className="logo" src={Logo} alt="logo-vtex"></img>
            <h2>Gestão de Cadastros</h2>
            <p>Sistema exclusivo para o cadastramento de novos clientes ou produtos.</p>
            <h5>O que você deseja cadastrar?</h5>
            <button className="card-button-client" onClick={newClient} >Clientes</button>
            <button className="card-button-product" onClick={newProduct} >Produtos</button>
         </div>
      </div>


   )
}