import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./dec.css";
import pic from "./images/pic.jpg";

class Main extends Component {
    render() {
        return (
            <div>
            <img src={pic} width="100%" height="250px"/>
            <div id="c123">
                <button><Link to="/tourism"> <h3> GO TO TOURISM PAGE </h3></Link></button>
            </div>
            </div>
        );
    }
}

export default Main;
