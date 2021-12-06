import React from 'react';
import "./home.css";
import {Card , CardBody , CardTitle , CardSubtitle , CardText , Button } from "reactstrap"
import { ProductConsumer } from "../../context";
import { Link } from 'react-router-dom';

const HomeCureses = () => {
  
  return (
    
    <div className='container'>
      <h1 className='my-3'> Our Exclusive Courses </h1>
      <div className='row'>
      <ProductConsumer>
            {value =>{
                return value.courses.map(course =>{
                  const {id , icon , title , info , price ,TotalHoures} =course;
                    return (
                      <ProductConsumer >
                        {value =>(
                      <div className='col-4 ' key={course.id}>
      <Card className='Coursecardbody' >
      <CardBody>
      {icon}
      <CardTitle tag="h3"  style={{color:"blue"}}> {title} </CardTitle>
      <CardSubtitle className="mb-2 "tag="h6" style={{color:"orange"}}>Our Courses </CardSubtitle>
      <CardText> {info} </CardText>
      <h5 className='text-blue font-iltalic mb-2' >
      {price} <span className='mr-1'>EG</span>
      </h5>
      <h5> Totle Houres : {TotalHoures} </h5>
      <Link to ="/CursePage" >
      <Button onClick={()=>{
         value.handlecourseDetail(id)
        }
          } >
      More information
      </Button>
      </Link>
      </CardBody>
      </Card>
                     </div>
                     )}
                     </ProductConsumer>
                    )

                })
            }}
            </ProductConsumer>
  </div>
   </div>
   
  )
}

export default HomeCureses
