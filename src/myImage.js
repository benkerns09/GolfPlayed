import React, { Component } from 'react';
import firebase from './firebase';

// const myImage = firebase.storage().ref('20171110_100240_4.jpg')
//     myImage.getDownloadURL().then((url)=> {
//         myImage.src = url;
//     });


class MyImage extends Component {
    state = {
        myImgURL: ''
    }
    componentDidMount() {
       let myImage =  firebase.storage().ref('20171110_100240_4.jpg')
            myImage.getDownloadURL().then((url)=> {
            myImage.src = url;
            this.setState({myImgURL : url})
        })
        
    }

    render() {  
        return (
            <div>
                {/* <h1>{myImage.src}</h1> */}
                <img src={this.state.myImgURL} style={{width: '200px', height: '200px'}} />
            </div>
        )
        
    }
}

export default MyImage;
