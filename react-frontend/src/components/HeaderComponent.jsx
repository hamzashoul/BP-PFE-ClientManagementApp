import React,{Component} from "react";
import logo from './logo.png';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }
    render() { 
        return (  
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <img src={logo} alt="Logo" style={{width:'100px',height:'60px',position:'relative',left:'20px'}}/>
                        <h4 style={{color:'white', margin:'auto'}}>Client Management Application</h4>
                    </nav>
                </header>
            </div>
        );
    }
}
export default HeaderComponent;