import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import SingIn from './pages/SingIn'
import Products from './pages/Products'


export default function Router() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/clients' exact component={SingIn}></Route>
            <Route path='/products' exact component={Products}></Route>
         </Switch>
      </BrowserRouter>
   )
}