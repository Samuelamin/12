import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./fotter.css";

export class Fotter extends Component {
    render() {
        return (
            <div className='Container fotter' style={{backgroundColor:"black" , padding:"20px"}}>
               
<div className='row'>
<div className='part-1 col-lg-6 col-sm-12'>
<h2>BABA Acdemye</h2>
<div className='row'>

<div className='col-4'>
<ul style={{listStyle:"none"}}>
<li><Link to="#">Sell oiline</Link></li>
<li> <Link to="#">Features</Link></li>
<li> <Link to="#">Shoping Cart</Link></li>
<li> <Link to="#">Store bulider</Link></li>
</ul>
</div>
<div className='col-4'>
<ul style={{listStyle:"none"}}>
<li> <Link to="#">Mobile commerce</Link></li>
<li><Link to="#">Dropshopping</Link></li>
<li> <Link to="#">Website development</Link></li>
</ul>
</div>
<div className='col-4'>
<ul style={{listStyle:"none"}}>
<li><Link to="#">Point of sell</Link></li>
<li><Link to="#">Hardwaer</Link></li>
<li> <Link to="#">Shoping Cart</Link></li>
<li> <Link to="#">Softwaer</Link></li>
</ul>
</div>
</div>
</div>
<div class="part-3 col-lg-3 col-sm-12 ">
<h2>Contact US</h2>
<ul>
<li>
<span class="f-icon"><i class="fas fa-location-arrow"></i></span>
<p>El-20 fesal -El Giza </p>
</li>
<li>
<span  class="f-icon"> <i class="fas fa-phone-square-alt"></i></span>
<p>01555239192</p>
</li>
<li>
<span  class="f-icon" ><i class="fas fa-envelope"></i></span>
<p>samuelamin1999@gmail.com</p>
</li>
</ul>
</div>
<div className='part-22 col-lg-3 col-sm-12 '>
<h1>Make Your Owne Way</h1>
</div>
</div>                
</div>

        )
    }
}

export default Fotter
