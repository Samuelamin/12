import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import { ProductConsumer } from '../context'; 
import '../Products/product.css';


export class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
    {value=>{
        const {modalOpen , closeModal} = value;
        const{img , title , price} = value.modalProduct;

        if(!modalOpen){
            return null;
        }
        else{
            return (
            <ModalContainer>
    <div className='container'>
        <div className='row'>
        <div id='model' className=' modalBody  p-5 col-8 mx-auto col-md-6 col-lg-4
        text-center text-capitalize'>
            <h5>item added to cart</h5>
            <img src={img} alt='sasa' className='img-fluid' />
            <h5> {title} </h5>
            <h5 className='text-muted'> price : {price} </h5>
            <Link to='/ProductList'>
                <button className='cart-btn '
                  style={{padding:'5px', bottom:'0' ,position:'relative' , borderRadius :'9px'}}
                   onClick={()=> closeModal()}> 
                    Continue Shoping
                </button>
            </Link>
            <Link to='/cart'>
                <button  className='card-btn-2' onClick={()=> closeModal()}> 
                    Go to cart
                </button>
            </Link>
        </div>
        </div>
    </div>

            </ModalContainer>
            );
        }

    }}
            </ProductConsumer>
        )
    }
}
const ModalContainer=styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
background: rgba(0,0,0,75%);
display: flex;
align-items: center;
justify-content: center;

#modal{

}
.modalBody{
    background-color: white;
    border-radius: 7px;
}
`
export default Modal
