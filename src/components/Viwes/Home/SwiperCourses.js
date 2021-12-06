import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductConsumer } from "../../context";
import {Card , CardBody , CardTitle , CardSubtitle , CardText , Button } from "reactstrap"
import {SidbarData} from "../../Cart/data";
import SwiperCore ,{Autoplay,Pagination,Navigation } from "swiper/core";
import 'swiper/swiper.min.css';
import "swiper/components/autoplay/package.json";
import "swiper/components/pagination/package.json";
import "swiper/components/navigation/package.json";

SwiperCore.use([Autoplay,Pagination,Navigation]);
export class SwiperCourses extends Component {
    render() {
        return (
            <div className='container'>
                <h1 className='my-3'>The most famous courses </h1>
    <Swiper spaceBetween={50} slidesPerView={3} autoplay={{"delay": 2000,"disableOnInteraction": true}}>
   
{SidbarData.map(item =>(
    
       <SwiperSlide key={item.id}>
      <Card  style={{backgroundColor:"black"}}>
      <CardBody>
      <CardTitle tag="h3"  style={{color:"white"}}> {item.title} </CardTitle>
      <h5 className='text-blue font-iltalic mb-2' >
      {item.price} <span className='mr-1'>EG</span>
      </h5>
      <h5 > Totle Houres : {item.TotalHoures} </h5>

      </CardBody>
      </Card>
       </SwiperSlide>
)) }

    </Swiper>
            </div>
        )
    }
}

export default SwiperCourses

