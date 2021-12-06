import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from "react-router-dom";
import {Card , CardImg  } from 'reactstrap'

import './product.css';

export class Product extends Component {
    render() {
        const { title ,id, img , price , inCart} = this.props.Product;

        return (
        <Card style={{width:"270px" , marginBottom:'10px'}}>
        <ProductConsumer>
        { value => (
            <div>
        <div className='img-container p-5'  onClick={ ()=> value.handleDetail(id)}>
        <Link to='/Details'>
        <CardImg alt="Card image cap"src={img} top className='card-img-top'style={{height:"155px"}} />
        </Link>
        </div>

        <div>

        <button  className='cart-btn' disabled={inCart?true : false}
        onClick={ ()=> { 
            value.addToCart(id);
            value.openModel(id);
            }}>
        {inCart ? <p className='text-capitalize mb-0' disabled>
        in Cart</p> :( <i className='fas fa-cart-plus' /> ) }
        </button>
        </div>
        </div>
        )}
        </ProductConsumer>
        {/* card footer */}
        <div className='card-footer' >
            <p className='align-self-center mb-0'> {title} </p>
            <h5 className='text-blue font-iltalic mb-0' >
                {price} <span className='mr-1'>EG</span>
            </h5>

        </div>
         
        </Card>
       
        )
    }
}


export default Product
