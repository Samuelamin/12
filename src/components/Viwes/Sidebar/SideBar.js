import React from 'react';
import SidebarMenu from './SidebarMenu';
import "./SideBar.css"
import { ProductConsumer } from '../../context';



export default function SideBar() {
  return (

        
      <nav className='sidebar'>
        <h4>BABA  </h4>
       
      <ul className='nav-menu-items' style={{paddingLeft:"initial"}}>

      <ProductConsumer>
            {value =>{
                return value.courses.map(course =>{
                    return <SidebarMenu course={course}
                     key={course.id} />
                })
            }}
            </ProductConsumer>
          
      </ul>
      <div >  
          <div className='support'>
          <i class="fas fa-info-circle"></i> <span>Support</span>
          </div>
          <div className='support'>
          <i class="fas fa-user-friends"></i> <span> Comapny Details </span> 
          </div>
      </div>
      </nav>  
      
  )
}
