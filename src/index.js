import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{BrowserRouter} from "react-router-dom";
import {ProductProvider} from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
</ProductProvider>,
document.getElementById('root')
);


