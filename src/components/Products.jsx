

function Products(props) {
  return (
    <div>
       <h3>{props.title}</h3>
       <img src={props.img}/>
       <p>{props.description}</p>
       <p>Price:{props.price}</p>
       <p>Discount Percent:{props.discount}</p>
       <div>
        <a href="" className="btn">View</a>
        <button className="btn">Buy</button>
       </div>
    </div>
  )
}

export default Products