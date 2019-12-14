import React from "react";

const Products = (props) =>{
console.log(props);
if ( props.pro.length<=0 ) {return null;}

    return(

        <div className="container">
            <div className="row">
                {
                    
                    props.pro.hits.map (item=>(
                        <div className="col-md-4">
                        <div className="card text-left">
                          <img className="card-img-top" src={item.largeImageURL} alt={item.tags}/>
                          <div className="card-body">
                            <h4 className="card-title">{item.user}</h4>
                            <p className="card-text">TOTAL LIKES: {item.likes}</p>
                          </div>
                        </div>
                    </div>

                    ))

                    
                }
                
            </div>
        </div>
    )
};

export default Products;