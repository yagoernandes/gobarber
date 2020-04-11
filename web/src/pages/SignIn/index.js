import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

export default function index() {
	return <>
    <img src={logo} alt="GoBarber" />
    <form>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <button type="submit" >Acessar</button>
      <Link to="/register">Criar conta gratuita</Link> 
    </form>
  </>
}
