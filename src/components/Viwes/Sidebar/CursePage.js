import SideBar from './SideBar';
import { ProductConsumer } from '../../context';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card , CardBody , CardTitle , CardSubtitle  } from "reactstrap"
export class CursePage extends Component {
    
    render() {
        return (

            <div className='d-flex'>
            <SideBar/>
            <ProductConsumer>
                {value =>{
const {id , title , icon , TotalHoures , img , price , info , inCart , sideitem } = value.SidebarDataDetails;
return(

            <div>
    <div className='container '>
    <div className='row'>
        <div className='col-10 mx-auto text-center text-slanted text-blue my-5 '>
            
            <h1><span>{icon}</span> {title} </h1>
        </div>
    </div>
    <div className='row'>
    <div className='col-10 mx-auto col-md-6 text-capitalize'> 
        <img src={img} alt='saasa' className='img-fluid' />
    </div>
        <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
            <h1> Course : {title} </h1>
            <h4 className='text-title text-uppercase text-muted mt-3 mb-2'> 
            made by :Samuel amin
            </h4>
            <h4 className='text-blue' >
                <strong>
                    price :
                    {price}  <span>EG</span> 
                </strong>
            </h4>
            <h5 className='text-blue'>
            <strong>
                    Total houres : {TotalHoures}
            </strong>
            </h5>
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
            <button style={{height:"43px"}} className='card-btn-2' disabled={inCart?true : false}
             onClick={()=> {value.coursesaddtoCart(id)} }>
        {inCart ? <p className='text-capitalize mb-0' disabled>
        in Cart</p> :( <p>Buy Now</p>) }
            </button>
            </div>
                            </div>
     </div>
        <div className='container '>
            <h1> Course include </h1>
        <div className='row'>
            {sideitem.map(sideitem =>{
                return(
                    <div className='col-lg-4 my-3' key={sideitem.id}>
                    <Card  >
                    <CardBody style={{backgroundColor:"#3882d7"}}>
                    <CardTitle tag="h3"  style={{color:"blue"}}> {sideitem.title} </CardTitle>
                    <CardSubtitle className="mb-2 "tag="h6" style={{color:"orange"}}>made By : Samuel Amin </CardSubtitle>
                    <h5 className='text-blue font-iltalic mb-2' >
                    {sideitem.price} <span className='mr-1'>EG</span>
                    </h5>
                    <h5> Totle Houres : {sideitem.TotalHoures} </h5>
                    </CardBody>
                    </Card>
                                   </div>
                )
            })}
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

export default CursePage
