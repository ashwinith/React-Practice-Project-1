import React,{Component} from "react";
import Search from "./components/search";
import "./App.css";

class App extends Component{
    render(){

        return(

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Search/>
                    </div>
                </div>
            </div>

            );

    }

}

export default App;

