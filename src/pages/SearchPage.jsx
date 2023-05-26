
function SearchPage() {
    const Searched =(localStorage.getItem('Products')!==null) ? JSON.parse(localStorage.getItem('Products')):[];
    console.log(Searched)
    console.log('hello')
  return (
    <div className="row">
        {Searched.length >0 ?
          Searched.map((value,index)=>{
          return(

            <div key={index}  className="col-6" >
       {/* {console.log(index)} */}
              <h1>Search Result</h1>
              <h5>{value.title}</h5>
              <img src={value.images[0]} alt="" className="w-75 h-75 rounded-3" />
              <p>{value.description}</p>
              <p>{value.price}</p>
              <p>{value.discountPercentage}</p>
              </div> 
          )
          
        }) :
        <h4>No results For this Search</h4>
    }
    </div>
  )
}

export default SearchPage