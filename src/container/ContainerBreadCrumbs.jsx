
import React, { Component } from 'react';
import { Link ,Route} from "react-router-dom";

class ContainerBreadCrumbs extends Component {

    breadCrumb = (part, partIndex, parts) => {
        const path = ['', ...parts.slice(0, partIndex+1)].join("/");
        return <Link key={path} to={path} >{part}</Link>
    }

    breadcrumbs = () => <Route path="/" render={
            props => {
                let parts = props.location.pathname.split("/");
                console.log(parts,'parts++')
                const place = parts[parts.length-1];
                parts = parts.slice(1, parts.length-1);
                    return <span>{parts.map(this.breadCrumb)}/{place}</span>
            }
        } 
        />

    render() {
        return (
            <div className="container-fluid">
                <div className='row'>
                    <ol className="breadcrumb breadcrumd-main">
                        <li>
                            {this.breadcrumbs()}
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}
export default ContainerBreadCrumbs;
