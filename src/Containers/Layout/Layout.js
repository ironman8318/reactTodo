import React,{Component,Fragment} from "react";
import Navbar from "../../Components/Navbar/Navbar";
class Layout extends Component {

    showAddFormHandler = () => {
        console.log("show");
        this.props.history.push("/add");
    };

    
    render(){
        return (
            <Fragment>
                <Navbar showAddFormHandler={this.showAddFormHandler} />
                {this.props.children}
            </Fragment>

        )    
    }
    
}

export default Layout;