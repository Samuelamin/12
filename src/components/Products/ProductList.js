import React  from 'react'
import Product from "./Product";
import { ProductConsumer } from '../context';
import SideBar from '../Viwes/Sidebar/SideBar';
import Fotter from '../Viwes/fotter/Fotter';



const ProductList = () => {
   
    return (
        <div>
        <div style={{display:"flex"}}>
            
          <SideBar  />
         
           <div className='container'>
                <h1 style={{textAlign:"center",marginTop:'40px'}} className="my-5">Store</h1>
               <div className='row' style={{ justifyContent:'space-around'}}>
                    <ProductConsumer>
                        {  value =>{  
                       return value.products.map( product=>{
                           return <Product Product={product} key={product.id} />
                        
                       })
                    }}
                    </ProductConsumer>
               </div>
           </div>
           </div>
<Fotter/>
        </div>
    )
}



export default ProductList


