import React,{useState} from 'react';
import "./SideBar.css"
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';


const SidebarMenu = ({course}) => {
    const {title ,icon , id } =course;
    const [sideitem , setSideitem] = useState(false);
    const showSideitem =()=> setSideitem(!sideitem);
    return (
     
      <div>
 <ProductConsumer>
           {value => (
                      <div className='side-menu'   >
                      <li className='nav-text' onClick={course.sideitem && showSideitem} >
                          <Link to='/CursePage'  onClick={ ()=> value.handlecourseDetail(id)} >
                             {icon} <span>{title}</span>
                          </Link>
                      </li>
          
                  </div>
           )}
 </ProductConsumer>
      

        </div>


       
    )
}

export default SidebarMenu





























{/* import React,{useState} from 'react';
import "./SideBar.css"
import { Link } from 'react-router-dom';
import { Fade } from 'reactstrap';



const SidebarMenu = ({item}) => {
    const [sideitem , setSideitem] = useState(false);
    const showSideitem =()=> setSideitem(!sideitem);

    return (
        
        <div className='side-menu'  >
            <li className='nav-text' onClick={item.sideitem && showSideitem} >
        <Link to='/' >
              {item.icon} 
              <span  >  {item.title}</span>
        </Link>
      </li>

      
     {sideitem && item.sideitem.map((item,index)=>{
      return(
        <Fade style={{transition:"all 1s ease"}} >
            <ul className='side-item' >
               
                    <li>
                <Link to={item.path} key={index}    >
                  {item.title}
                </Link>
                </li>
               
                
            </ul>
            </Fade> )})}
        </div>
       
    )
}

export default SidebarMenu */}