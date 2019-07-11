import React, { Component } from 'react';
import { Link} from "react-router-dom";


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu:{
                home:'Home',
                porfolio:'porfolio',
                curriculumvitae:'curriculum vitae',
                partenaires:'partenaires',
                contact:'contact'
            }
        }
        
    }

    render() {
        return (
                <div className="menu-main">
                    <ul className="nav nav-pills">
                        <li className='navbar-liste '>
                            <Link to="/">{this.state.menu.home}</Link>
                        </li>
                        <li className='navbar-liste '>
                            <Link to="/porfolio">{this.state.menu.porfolio}</Link>
                        </li>
                        <li className='navbar-liste'>
                            <Link to="/curriculumvitae">{this.state.menu.curriculumvitae}</Link>
                        </li>
                        <li className='navbar-liste'>
                            <Link to="/partenaires">{this.state.menu.partenaires}</Link>
                        </li>
                        <li className='navbar-liste'>
                            <Link to="/contact"> {this.state.menu.contact} </Link>
                        </li>
                    </ul>
                </div>
        );
    }
}

export default Menu;