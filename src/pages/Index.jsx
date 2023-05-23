import {useEffect,useState} from 'react'
import axios from 'axios'
import Home from "../components/Home";
function Index() {
const [products, setProducts]=useState([]);
function getProducts(){
  axios.get('https://dummyjson.com/products?limit=10&skip=10')
  .then(items=>{
    setProducts(items.data.products)
  }).catch(err=>{
    console.log(err)
  })
}
useEffect(()=>{
  getProducts() 
},[] )
  return (
    <div className=''>
        {products.length >0?
         products.map((value,index)=>{
          return(
            <div key={index} className="product">
              <Home title={value.title} description={value.description} img={value.images[0]} price={value.price} discount={value.discountPercentage}/> 
            </div>
          )
        
        }):
        <p>Products Loading...</p>
        }
    </div>
  )
}

export default Index