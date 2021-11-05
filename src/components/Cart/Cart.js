import React, { Component } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import Title from './Title';
import CartTotal from './CartTotal';
import { ProductConsumer } from '../context';

export class Cart extends Component {
    render() {
        return (
            <section>
               <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                 <Title/>
                                 <CartColumns/>
                                 <CartList value ={value} />
                                 <CartTotal value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        }else{
                            return <EmptyCart/>   ;
                        }
                    }}
                
                </ProductConsumer>
            </section>
        )
    }
}

export default Cart
