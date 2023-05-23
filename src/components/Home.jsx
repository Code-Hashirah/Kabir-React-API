
function Home(props) {
  return (
    <div>
      
       <div className="text-bg-danger d-flex">

       <div className="col-6">
        <h4>Title:{props.title}</h4>
        <img className="img w-50" src={props.img} alt="" />
        <p>Price:{props.price}</p>
       </div>  

       </div>
    </div>
  )
}

export default Home