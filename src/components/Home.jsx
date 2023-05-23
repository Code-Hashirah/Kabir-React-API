
function Home(props) {
  return (
    <div className="">
      
       <div className="">

       <div className="">
        <h4>Title:{props.title}</h4>
        <img className="img w-50 h-50" src={props.img} alt="" />
        <p>Price:{props.price}</p>
       </div>  

       </div>
    </div>
  )
}

export default Home