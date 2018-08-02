import React, { Component } from 'react';
import firebase from './firebase';

const myImage = firebase.storage().ref('20171110_100240_4.jpg');
    myImage.getDownloadURL().then((url)=>{
        myImage.src = url;
    });


class MyImage extends Component {
    render() {  
        return (
            <div>
                <h1>{myImage.src}</h1>
                <img src={myImage} />
            </div>
        )
        
    }
}

export default MyImage;

// var fileRef = firebase.storage().ref('20171110_100240_4.jpg');
// fileRef.getDownloadURL().then((url)=>{
//     myImage.src = url;//assuming you have an <img /> tag in your html with id "myImage"
// });

