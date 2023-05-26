import {Link} from 'react-router-dom'

function Products(props) {
  // console.log(props)
  return (
    <div>
       <h3>{props.title}</h3>
       <img className="w-50 h-50" src={props.img}/>
       <p>{props.description}</p>
       <p>Price:{props.price}</p>
       <p>Discount Percent:{props.discount}</p>
       <div>
        <Link to={`../single/${props.id}`} className="btn btn-light">View <span className="fas fa-eye"></span></Link>
        <button className="btn btn-warning">Buy</button>
       </div>
    </div>
  )
}

export default Products