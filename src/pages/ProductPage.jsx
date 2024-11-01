import {useEffect, useState} from 'react';
import Products from "../components/Products";
import axios from 'axios'
function ProductPage() {
  const [products,setProducts]=useState([]);
  function getProducts(){
    axios.get('https://dummyjson.com/products').then(items=>{
      setProducts(items.data.products)
    })
  }
  useEffect(()=>{
    getProducts()
  }, [])

 
  return (
    <main className="main row text-bg-danger">
      
    {
      (products.length >0)?
      products.map((value, index)=>{
        return(
          <div key={index} className="product col-4">
            <Products title={value.title} description={value.description} img={value.images[0]} price={value.price} discount={value.discountPercentage} id={value.id}/> 
          </div>
        )
      }):
      <h2>Please Wait ...</h2>
    }
  </main>
  )
}

export default ProductPage