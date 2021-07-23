import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputMask from 'react-input-mask'
import '../style.css'

import Logo from '../assets/Vtex-logo.png'

export default function SingIn() {

   const [produto, setProduto] = useState('')
   const [categoria, setCategoria] = useState('')
   const [descricao, setDescricao] = useState('')
   const [preco, setPreco] = useState('')
   const [quantidade, setQuantidade] = useState('')
   
   function cadastrarProduct(event) {
      event.preventDefault()
      let products = JSON.parse(localStorage.getItem('Produtos') || '[]')
      products.push({
         Nome: produto,
         Categoria: categoria,
         Descrição: descricao,
         Preço: preco,
         Quantidade: quantidade
      })

      localStorage.setItem('Produtos', JSON.stringify(products))
      clearFrom()
   }

   function clearFrom() {
      setProduto('')
      setCategoria('')
      setDescricao('')
      setPreco('')
      setQuantidade('')
   }


   return (
      <div className="card-container">
         <form className="card-content">
            <img src={Logo} alt="Vtex-logo" className="logo-cadastro"></img>
            <h2>Cadastro de produtos</h2>
            <p>Preencha os dados corretamente.</p>
            <label className="label-product"  htmlFor="produto">Produto</label>
            <input value={produto} onChange={(e)=> setProduto(e.target.value)} className="input-product" id="produto" type="text" placeholder="Digite qual o é o produto"></input>

            <label className="label-product" >Categoria</label>
            <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="input-product">
               <option value="selecione">Selecione</option>
               <option value="notebooks">Notebooks</option>
               <option value="smartphones">Smartphones</option>
               <option value="acessorios">Acessórios</option>
               <option value="outros">Outros</option>
            </select>

            <label  className="label-product" htmlFor="descricao">Descrição</label>
            <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} className="input-product" id="descricao" type="text" placeholder="Especificações básicas do produto"></textarea>
            <label  className="label-product" htmlFor="preco">Preço</label>
            <InputMask value={preco} onChange={(e) => setPreco(e.target.value)} className="input-product" id="preco" type="text" placeholder="Digite o valor do produto"></InputMask>
            <label  className="label-product" htmlFor="quantidade">Quantidade em estoque</label>
            <input value={quantidade} onChange={(e) => setQuantidade(e.target.value)} className="input-product" id="quantidade" type="text" placeholder="Digite a quantidade disponivel"></input>

            <button type="submit" onClick={cadastrarProduct} className="card-button-cadastrar-product">Cadastrar produto</button>
            <Link className="card-button-voltar" to="/"> &lt; Voltar</Link>
         </form>

      </div>
   )
}