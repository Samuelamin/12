import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import Navpar from "./components/Navpar";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Cart/Modal";
import ProductList from "./components/ProductList";
import {BrowserRouter , Switch
  ,Route } from 'react-router-dom';




export class App extends Component {
  render() {
    return (
    <BrowserRouter>
    <Navpar/>
            <Switch>
           <Route path = "/" component = {ProductList} exact></Route>
           <Route path = "/Cart" component = {Cart}exact></Route>
           <Route path = "/Details" component = {Details}exact></Route>
           <Route  component = {Default}exact></Route>
    
          
           </Switch>
           <Modal/>
    </BrowserRouter>
    )
  }
}

export default App
