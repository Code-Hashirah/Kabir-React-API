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

function getCats(){
  axios.get('https://dummyjson.com/products/categories')
  .then(categories=>{
    console.log(categories.data.products)
  })
}

  return (
    <div className='row text-bg-danger'>

      {
        products.length >0?
         products.map((value,index)=>{
          return(
            <div key={index} className="col-6">
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