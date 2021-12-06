import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart/Cart";
import Navpar from "./components/Viwes/Navpar";
import Details from "./components/Products/Details"; 
import Default from "./components/Cart/Default";
import Modal from "./components/Cart/Modal";
import ProductList from "./components/Products/ProductList"
import {BrowserRouter , Switch ,Route } from 'react-router-dom';
import Home from "./components/Viwes/Home/Home";
import CursePage from './components/Viwes/Sidebar/CursePage';



export class App extends Component {
  render() {
    return (

<BrowserRouter >
<Navpar/>

        <Switch>
        <Route path = "/" component = {Home} exact></Route>
        <Route path = "/Home" component = {Home} exact></Route>
        <Route path = "/ProductList" component = {ProductList} exact></Route>
        <Route path = "/Cart" component = {Cart}exact></Route>
        <Route path = "/Details" component = {Details}exact></Route>
        <Route path = "/CursePage" component = {CursePage} exact></Route>
        <Route  component = {Default}exact></Route>
  
        </Switch>
        <Modal/>
       
</BrowserRouter>
    )
  }
}

export default App
