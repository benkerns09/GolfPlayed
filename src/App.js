import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import firebase from './firebase.js';
import MyImage from './myImage.js';
// import axios from 'axios';

// var fileRef = firebase.storage().ref('20171110_100240_4.jpg');
//   fileRef.getDownloadURL().then((url)=>{
//   var myImage = myImage.src = url;//assuming you have an <img /> tag in your html with id "myImage"
// });

// const goose = firebase.storage().ref('20171110_100240_4.jpg')
//   goose.getDownloadURL().then(('https://firebasestorage.googleapis.com/v0/b/golfplayed-733f4.appspot.com/o/20171110_100240_1.jpg?alt=media&token=0c94fbfb-758b-49a9-9b7f-45625ccd8fcb') {
//     const gooseImg.src = url;
//   })

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      // username: '',
      // items: [],
      // logos: [],
      // selectedFile: null
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleImage = this.handleImage.bind(this);
  }

  // fileSelectedHandler = event => {
  //   this.setState({
  //     selectedFile: event.target.files[0]
  //   })
  // }

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post('https://us-central1-golfplayed-733f4.cloudfunctions.net/uploadFile', fd, {
  //     onUploadProgress: progressEvent => {
  //       console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')
  //     }
  //   })
  //     .then(res => {
  //       console.log(res);
  //     });
  // }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, btn) {
    e.preventDefault();
    const btnName = btn
    const imageRef = firebase.database().ref('images');
    const logosRef = firebase.database().ref('logos');

    const item = {
      url: this.state.currentItem,
      // user: this.state.username
    }
    

    if (btnName === 'logobtn') {
      logosRef.push(item);
    }

    if (btnName === 'imagebtn') {
      imageRef.push(item);
    }
    
    // this.setState({
    //   currentLogo: '',
    //   username: ''
    // });
  }
  
  // handleImage() {
  //   const fileRef = firebase.storage().ref('20171110_100240_1.jpg');
  //   fileRef.getDownloadURL().then((url)=>{
  //     myImage.src = url;
  //   });
  // }


  componentDidMount() {
    const imageRef = firebase.database().ref('images');
    // const logosRef = firebase.database().ref('logos');
    // logosRef.on('value', (snapshot) => {
    //   let logos = snapshot.val();
    //   let newState = [];
    //   for (let logo in logos) {
    //     newState.push({
    //       id: logo,
    //       title: logos[logo].logo,
    //     });
    //   }
    //   this.setState({
    //     logos: newState
    //   });
    // });

    // imageRef.on('value', (snapshot) => {
    //   let items = snapshot.val();
    //   let newState = [];
    //   for (let item in items) {
    //     newState.push({
    //       id: item,
    //       title: items[item].title,
    //       user: items[item].user
    //     });
    //   }
    //   this.setState({
    //     items: newState
    //   });
    // });
  }

  render() {
    return (
      <div className='app'>
        <header>
            <div className="wrapper">
              <h1>Logo or Image?</h1>    
            </div>
        </header>
        <div className='container'>
          {/* <section className='add-item'> */}
                <form>
                  {/* <input type="text" name="username" onChange={this.handleChange}  value={this.state.username} /> */}
                  <input type="text" name="currentItem" onChange={this.handleChange} value={this.state.currentItem} />
                </form>
                  {/* <input
                    style={{display: 'none'}}
                    type="file"
                    onChange={this.fileSelectedHandler}
                    ref={fileInput => this.fileInput = fileInput}/> */}
                  {/* <button onClick={() => this.fileInput.click()}>Pick File</button> */}
                  {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
                

          {/* </section> */}
          
          <MyImage />
          <button className="Logo" name="logo" onClick={(e, btn) => this.handleSubmit(e,'logobtn')} value={this.state.currentItem}>Logo</button>
          <button className="Image" name="image" onClick={(e, btn) => this.handleSubmit(e,'imagebtn')} value={this.state.currentItem}>Image</button>
          <button className="Delete" name="delete">Delete</button>
          <button className="Undo" name="undo">Undo</button>
          
        </div>
      </div>
    );
  }
}
export default App;
