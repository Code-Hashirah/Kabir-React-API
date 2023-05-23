import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
function SinglePage() {
  const [product, setProduct] =useState([]);
  const {productId}=useParams()

  function singleProduct(){
    axios.get(`https://dummyjson.com/products/${productId}`)
  .then(result=>{
    setProduct(result.data)
  })
  }
useEffect(()=>{
  singleProduct()
}, [])
let isProduct=Object.keys(product).length >0 ? true:false
  return (
    <div>
       {
        isProduct ?
        <div>
          <div>
            <img src={product.images[0]} />
          </div>
          <div>
            {product.description}
          </div>
        </div>
        : "Loading"
       }
    </div>
  )
}

export default SinglePage