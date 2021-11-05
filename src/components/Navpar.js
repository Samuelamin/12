import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
export class Navpar extends Component {
    render() {
        return (
            <div>
            <NavWrapper className='navbar navbar-expand-sm  navbar-dark px-sm-5'>
                {/*
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk
                */}
                <Link to='/'>
                <img src={logo} alt='sasa' className='navbar-barnd' />
                </Link>

                <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5' style={{marginLeft:'5rem'}}>

                <Link to='/' className='nav-link'> Our Products</Link> 
                </li>                
                </ul>
                <Link to='/cart' style={{marginLeft:'auto'}}>
                    <ButtonContainer > 
                        <span className='mr-2'>
                        <i className='fas fa-cart-plus'/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            
            </NavWrapper>



            </div>
        )
    }
}
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
color: var(--lightblue);
background: transparent;
border: 0.2rem solid var(--lightblue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover{
background: var(--lightblue)
color: var(--mainblue)
}
&:focus{
outline: none;
}
`
const NavWrapper = styled.nav`
background : var(--mainblue);
.nav-link{
    color :var (--mainwhite)!important;
    font-size :1.3rem;
    text-transform : captalize  ;
}
`








export default Navpar
