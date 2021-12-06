import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { ProductConsumer } from "../context"; 
import '../Products/product.css';

export class Details extends Component {
    render() {
        return (
            <div>
              <ProductConsumer>
                  {value =>{
                      const {id , company , img , info , price , inCart , title }= value.detailProduct;
                      return(
    <div className='container py-5'>

    <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5 '>
            <h1>{title}</h1>
        </div>
    </div>
    <div className='row'>
        <div className='col-10 mx-auto col-md-6 text-capitalize'> 
        <img src={img} alt='saasa' className='img-fluid'  style={{width:"100%"}} />
        </div>
        <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
            <h1> model : {title} </h1>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> 
            made by :{ company}
            </h4>
            <h4 className='text-blue' >
                <strong>
                    price : <span>$</span>
                    {price}
                </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                some info about product : 
            </p>
            <p className='text-muted '>
                {info }
            </p>
        
            <Link to='/'>
            <button className='card-btn-1' >
            back to products
            </button>
            </Link>
            <button className='card-btn-2' disabled={inCart ? true : false} onClick={()=>{
                value.addToCart(id);
                value.openModel(id);
            } }>
                {inCart ? "inCart" : "add to card"}
            </button>
            </div>
            </div>
            </div>
                      )
                  }}
              </ProductConsumer>
            </div>
        )
    }
}

export default Details
{/*               <div>
              <ProductConsumer>
                  {value =>{
                      const {id , company , img , info , price , inCart , title }= value.detailProduct;
                      return(
    <div className='container py-5'>

    <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5 '>
            <h1>{title}</h1>
        </div>
    </div>
    <div className='row'>
        <div className='col-10 mx-auto col-md-6 text-capitalize'> 
        <img src={img} alt='saasa' className='img-fluid' />
        </div>
        <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
            <h1> model : {title} </h1>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> 
            made by :{ company}
            </h4>
            <h4 className='text-blue' >
                <strong>
                    price : <span>$</span>
                    {price}
                </strong>
            </h4>
            <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                some info about product : 
            </p>
            <p className='text-muted '>
                {info }
            </p>
        
            <Link to='/'>
            <button className='cart-btn' >
            back to products
            </button>
            </Link>
            <button className='card-btn-2' disabled={inCart ? true : false} onClick={()=>{
                value.addToCart(id);
                value.openModel(id);
            } }>
                {inCart ? "inCart" : "add to card"}
            </button>
            </div>
                            </div>

                                    

                          </div>
                      )
                  }}
              </ProductConsumer>
            </div> */}