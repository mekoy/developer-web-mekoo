
import React, { Component } from 'react';
import ControlledCarousel from '../componentsUtils/sliderComponent/ControlledCarousel';

class ContainerHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className='container-fluid'>
                <ControlledCarousel />
            </div>
        );
    }
}
export default ContainerHome;
