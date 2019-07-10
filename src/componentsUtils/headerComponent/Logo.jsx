import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Logo extends Component {
    render() {
        return (
            <div className="row">
                <aside className=" col-sm-12 col-xs-12 col-lg-12">
                    <h1 className="title-logo"> <Link to="/">meko design</Link></h1>
                    
                </aside>
            </div>
        );
    }
}

export default Logo;