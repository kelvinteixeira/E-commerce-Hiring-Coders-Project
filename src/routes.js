import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from  './pages/Home'
import Clients from './pages/Clients'
import Products from './pages/Product'


export default function Router() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/clients' exact component={Clients}></Route>
            <Route path='/products' exact component={Products}></Route>
         </Switch>
      </BrowserRouter>
   )
}