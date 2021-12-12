import React  from 'react';
import "./SideBar.css"
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
      <nav className='sidebar' >
        <h4>BABA  </h4>
       
      <ul className='nav-menu-items' style={{paddingLeft:"initial"}}>

      <ProductConsumer>
            {value =>{
                return value.courses.map(course =>{
                  const {title ,icon , id } =course;
                    return (
                      <ProductConsumer key={id}>
                      {value => (
                                 <div className='side-menu'  >
                                 <li className='nav-text'  >
                                     <Link to='/CursePage'  onClick={ ()=> value.handlecourseDetail(id)} >
                                        {icon} <span>{title}</span> 
                                     </Link>
                                 </li>
                     
                             </div>
                      )}
            </ProductConsumer>

                    )
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

export default SideBar
