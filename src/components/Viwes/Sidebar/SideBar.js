import React ,{useState} from 'react';
import "./SideBar.css"
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [hide , setHide] = useState(false);
  return (
    <nav className='sidebar' onMouseEnter={()=>setHide(true)} onMouseLeave={()=>setHide(false)} >
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
                                    {icon} {hide? <span>{title}</span> : null}
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
      <i class="fas fa-info-circle"></i> {hide? <span>Support</span> :null}
      </div>
      <div className='support'>
      <i class="fas fa-user-friends"></i> {hide? <span> Comapny Details </span> : null} 
      </div>
  </div>
  </nav>  
  )
}
