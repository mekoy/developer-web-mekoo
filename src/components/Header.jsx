import React, { Component } from 'react';
import  SearchLang from '../componentsUtils/headerComponent/SearchLang';
import  Logo  from '../componentsUtils/headerComponent/Logo';
import  Menu  from '../componentsUtils/headerComponent/Menu';
import  SearchData  from '../componentsUtils/headerComponent/SearchData';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ContainerHome from '../container/ContainerHome' ;
import ContainerPortofolio from '../container/ContainerPortofolio' ;
import ContainerContact from '../container/ContainerContact';
import ContainerCurculumVitae from '../container/ContainerCurculumVitae';
import ContainerPartenaires from '../container/ContainerPartenaires';
import ContainerBreadCrumbs  from '../container/ContainerBreadCrumbs';


class Header extends Component {

    render() {
        return (
            <div className="container-fluid">
             <Router>
                <div className='main-head-top'>
                    <div className="row">
                        <div className="col-sm-3 col-xs-12 col-lg-3">
                            <Logo />
                        </div>
                        <div className="col-sm-6 col-xs-12 col-lg-5">
                            <Menu />
                        </div>
                        <div className="col-sm-3 col-xs-12 col-lg-2">
                            <SearchData />
                        </div>
                        <div className="col-sm-3 col-xs-12 col-lg-2">
                            <SearchLang />
                        </div>
                    </div> 
                </div>
                <ContainerBreadCrumbs  /> 
                <Switch>
                    <Route exact path="/" component={ContainerHome} />
                    <Route  path="/porfolio" component={ContainerPortofolio} />
                    <Route  path="/curriculumvitae" component={ContainerCurculumVitae} />
                    <Route  path="/partenaires" component={ContainerPartenaires} />
                    <Route  path="/contact" component={ContainerContact} />
                </Switch>
            </Router>
            </div>
        );
    }
}

export default Header;