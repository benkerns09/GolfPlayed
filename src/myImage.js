import React, { Component } from 'react';

class MyImage extends Component {
    render() {  
        return (
            <div>
                <img className="actualpic" src={this.props.image} />
            </div>
        )
        
    }
}

export default MyImage;
