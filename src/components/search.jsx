import React,{Component} from "react";
import axios from "axios";
import Products from "./products";

class Search extends Component{
      constructor(){
          super();
          this.state={
              change:"",
              productImages:[],
              loading:""
          }

          //this.FetchInputData=this.FetchInputData.bind(this); // we have to write this line coz when we write 
                                                                //this.setState in a method it doesn't support this keyword
                                                                // so alternative for this line is arrow function because 
                                                                //arrow function directly supports this keyword
      }
    FetchInputData = (event) =>{

        this.setState({change:event.target.value});  // Another short way of writing this code is to 
                                                     //write this arrow funtion directly on "onChange" event
                                                     // onChange = {(e)=>this.setState({change:e.target.value})}
    
    }

    handleFormSubmit=async(event)=>{

        event.preventDefault();
        this.setState({loading:true});
        this.setState({productImages:this.state.change});
        let apiData = await axios.get(`https://pixabay.com/api/?key=14531809-057fdaed9fe8153dec5013c5d&q=yellow+${this.state.change}&image_type=photo&pretty=true`);
        console.log(apiData);
        setTimeout(()=>{
            this.setState({loading:false});
            this.setState({productImages:apiData.data});
        },3000);
        

    }

    render(){

        return(

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <form style={{marginTop:"20px"}} onSubmit={this.handleFormSubmit}>
                    <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                    <span className="input-group-text cyan lighten-2" id="basic-text1"><i className="fas fa-search text-white"
        aria-hidden="true"></i></span>
  </div>

                    <input type="text" placeholder="Search here" 
                    className="form-control my-0 py-1" aria-label="Search" onChange={this.FetchInputData} value={this.state.change}/>
                    
                    </div>
                        
                    </form>

                    </div>

                </div>

                <div className="row">
                   {this.state.loading ? <img src="../../../React-Practice-Project-1(API Fetch)/public/LoadingImage1.jpg" alt="Loading...Please wait" style={{height:"20px",width:"100px"}}/> : <Products pro={this.state.productImages}/>} 
                </div>

            </div>

        );
    }
}

export default Search;
