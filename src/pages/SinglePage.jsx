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
    <div className='text-bg-danger'>
       {
        isProduct ?
        <div className='row'>
          <h5>{product.title}</h5>
          <p>Price:{product.price} NGN</p>
          <div>
            <img src={product.images[0]} />
          </div>
          <p>Discount: {product.discountPercentage}%</p>
          <div>
            {product.description}
          </div>
          {
            product.images.map((value, index)=>{
              return(
                <div key={index} className="col-4">
                  <img className="img w-75 h-75 rounded-3" src={value}  />
                </div>
              )
            })
          }
        </div>
        : "Loading"
       }
    </div>
  )
}

export default SinglePage