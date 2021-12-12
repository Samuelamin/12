import React, { Component } from 'react'

import { storeProducts , detailProduct ,SidbarData ,SidebarDataDetails} from './Cart/data';


const ProductContext =React.createContext()

class ProductProvider extends Component {
   state={
       products : [],
       cart: [],
       courses :[],
       SidebarDataDetails:SidebarDataDetails,
       detailProduct :detailProduct ,
       modalOpen:false  ,
       modalProduct:detailProduct,
       cartSubTotal :0,
       cartTax:0,
       cartTotal :0,
    }

    componentDidMount(){
        this.setProducts();
        this.setcourses();
    };
//Product function 
    setProducts=()=>{
    let tempProducts =[];
    storeProducts.forEach(item=>{
        const singleItem ={...item}
        tempProducts=[...tempProducts , singleItem];
    });
    this.setState(()=>{
        return { products : tempProducts};
    });
        };    
getItem= id=>{
    const product = this.state.products.find(item => item.id===id);
    return product 
}

handleDetail =id=>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {detailProduct:product}
    })
};

addToCart =id=>{
    let tempProducts =[...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart=true;
    product.count = 1;
    const price = product.price;
    product.total =price;
    this.setState(()=>{
        return {products :tempProducts,cart:[...this.state.cart ,product]};
    },()=>{
        this.addtotals();
    });
 };

 openModel=id=>{
    const product = this.getItem(id);
    this.setState(()=>{
    return {modalProduct : product,modalOpen:true }
    });
};

closeModal = ()=>{
 this.setState(()=>{
     return{modalOpen:false}
 });
};
reomveItem = (id)=>{
    let tempProducts =[...this.state.products];
    let tempCart =[...this.state.cart];
    tempCart =tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct =tempProducts[index];
    removedProduct.inCart =false;
    removedProduct.count =0;
    removedProduct.total=0;

    this.setState(()=>{
        return{
            cart:[...tempCart] ,
            products :[...tempProducts]
        };
    } , ()=>{
        this.addtotals();
    })
 };
                    //Courses function
                //Courses function
            //Courses function
        //Courses function
setcourses=()=>{
    let tempCourses =[];
    SidbarData.forEach(item=>{
        const singleItem={...item}
        tempCourses=[...tempCourses ,singleItem]
    });
    this.setState(()=>{
        return{courses : tempCourses}
    });
};
handlecourseDetail = (id)=>{
   const course = this.getItemCourses(id);
   this.setState(()=>{
       return{SidebarDataDetails:course}
   })
}
getItemCourses= id=>{
    const course = this.state.courses.find(item => item.id===id);
    return course 
}
coursesaddtoCart =id =>{
    let tempCourses =[...this.state.courses];
    const index = tempCourses.indexOf(this.getItemCourses(id));
    const course = tempCourses[index];
    course.inCart= true ;
    course.count = 1;
    const price =course.price;
    course.total =price;
    this.setState (()=>{
        return {courses : tempCourses ,cart:[...this.state.cart , course]};
    }, ()=>{
        this.addtotals();
    })
};



    increment = (id) =>{
        let tempCart =[...this.state.cart];
        const selectProduct = tempCart.find(item=> item.id ===id);
        const index = tempCart.indexOf(selectProduct);
        const product =tempCart[index];
        product.count =product.count+1 ;
        product.total = product.total+product.price;
        this.setState(()=>{
            return{cart:[...tempCart]}},()=>{
                this.addtotals(); 
        });


    };
    decrement = (id) =>{
        let tempCart =[...this.state.cart];
        const selectProduct = tempCart.find(item=> item.id ===id);
        const index = tempCart.indexOf(selectProduct);
        const product =tempCart[index];
        product.count =product.count-1 ;
         if(product.count === 0){
             this.reomveItem(id);
             this.reomveItemcourses(id);
         }else{
             product.total = product.count * product.price;
             this.setState(()=>{
                return{cart:[...tempCart]}},()=>{
                    this.addtotals(); 
            })
         }
    };

    reomveItemcourses = id =>{
        let tempCourses =[...this.state.courses];
        let tempCart =[...this.state.cart];
        tempCart =tempCart.filter(item => item.id !== id);
        const index = tempCourses.indexOf(this.getItemCourses(id));
        let removedCourse =tempCourses[index];
        removedCourse.inCart = false;
        removedCourse.count =0;
        removedCourse.total=0;
 
        this.setState(()=>{
            return{
                cart:[...tempCart] ,
                courses :[...tempCourses]
            };
        } , ()=>{
            this.addtotals();
        })
     };

    clearCart=()=>{
      this.setState(()=>{
          return{cart :[]};
      } , ()=>{
          this.setProducts();
          this.addtotals();
          this.setcourses();
      })
    };


addtotals =()=>{
    let subTotal = 0;
    this.state.cart.map(item =>(subTotal += item.total));
    const tempTax = subTotal *0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax 
    this.setState(()=>{
        return{
            cartSubTotal : subTotal,
            cartTax : tax,
            cartTotal:total
        }
    })
}




    render() {
        return (
            <ProductContext.Provider value ={{
                ...this.state,
                handleDetail:this.handleDetail,
                handlecourseDetail:this.handlecourseDetail,
                addToCart:this.addToCart,
                coursesaddtoCart :this.coursesaddtoCart,
                openModel:this.openModel,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                reomveItem:this.reomveItem,
                clearCart:this.clearCart,
                reomveItemcourses:this.reomveItemcourses    
            }}>
              {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider , ProductConsumer}


