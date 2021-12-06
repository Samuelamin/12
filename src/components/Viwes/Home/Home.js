import { Link } from "react-router-dom";
import "./home.css"
import { ProductConsumer } from "../../context";
import SideBar from "../Sidebar/SideBar";
import React, { Component } from 'react'
import HomeCureses from "./HomeCureses";
import Fotter from "../fotter/Fotter";

export class Home extends Component {
    render() {
       
        return (
            <div>
<div style={{display:"flex"}}>
<SideBar />
<div>

<div className='section-1'>
        <div className='container '>
            <div className='title'>
            <h1>Make your owne Way <span>BABA acdemey</span> </h1>
            </div>
           
                <div className='row'>
        <div className='part-1 col-7'>
        <img src={require("../img/1.jpg").default}  alt="logo" style={{width:"100%"}}/>
        </div>

        <div className='part-2 col-4' >
            <div className='text'>
            <h1>Develop your skills with the best of our instructors</h1>
             <Link to="#">
             <button className='btn-1'>Sing in</button>
             </Link>
             <Link to="#">
             <button className='btn-2'>Sine Up</button>
             </Link>
            
           
            </div>
       

        </div>


        </div>
        </div>
  </div>



<div className='section-2'>
    
<HomeCureses/>
</div>
  


</div>
</div>
<Fotter/>
</div>
        )
    }
}

export default Home

