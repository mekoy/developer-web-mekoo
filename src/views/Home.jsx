import React from 'react';

class Home extends React.Component {
    constructor (...props) {
        super(props);
        
        this.state = {
            productM :true,
        }
    }

    render() {
      return (
        <div>
           <h3>mes products.</h3>
           <div>ma list</div>
        </div>
      )
    }
}

export default Home;