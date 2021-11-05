import React, { Component } from 'react';
import Product from "./Product";
import { ProductConsumer } from './context';
export class ProductList extends Component {

    render() {
        return (
        <div>
           <div className='container'>
                <h1 style={{textAlign:"center",marginTop:'20px'}}>Our Products</h1>
               <div className='row' style={{ justifyContent:'space-around'}}>
                    <ProductConsumer>
                        {  value =>{  
                       return value.products.map( product=>{
                           return <Product Product={product} key={product.id} />
                        
                       })
                    }}
                    </ProductConsumer>
               </div>
           </div>


        </div>
        )
    }
}

export default ProductList
