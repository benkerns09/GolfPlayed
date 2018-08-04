import React, { Component } from 'react';
import firebase from './firebase';

// const myImage = firebase.storage().ref('20171110_100240_4.jpg')
//     myImage.getDownloadURL().then((url)=> {
//         myImage.src = url;
//     });
// var links = [
//     '20171110_100240_16.jpg',
//     '20171110_100240_16.jpg',
//     '20171110_100240_21.jpg'
// ];

class MyImage extends Component {
    render() {  
        return (
            <div>
                {/* <h1>{myImage.src}</h1> */}
                <img className="actualpic" src={this.props.image} />
            </div>
        )
        
    }
}

export default MyImage;
