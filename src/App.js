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
      currentItem: '20171110_100240_4.jpg',
      // username: '',
      // items: [],
      // logos: [],
      // selectedFile: null
      links: [
        '20171110_100240_31.png',
        '20171110_100240_21.jpg',
        '20171110_100240_622.jpg',
        '20171110_100240_620.jpg',
        '20171110_100240_3.jpg',
        'rfpzfWvQ.jpeg',
        'GkifflYg.png',
        '7t4uefmg.png'
      ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    // console.log(e.target.name);
    // this.setState({
    //   [e.target.name]: e.target.value
    // });
    // const selectedFile;
    // this.handleSubmit(e) {
    //   selectedFile = e.target.files[0];
    // }
  }

  handleSubmit(e, btn) {
    e.preventDefault();
    const btnName = btn
    const imageRef = firebase.database().ref('images');
    const logosRef = firebase.database().ref('logos');
    // let myImage =  firebase.storage().ref('20171110_100240_4.jpg')
    // myImage.getDownloadURL().then((url)=> {
    // myImage = url;
    // this.setState({myImgURL : url})

    const item = {
      url: this.state.currentUrl,
      // user: this.state.username
    }
    
    // for (var i = 0; i<3; i++) {
    //   const myImage = firebase.storage().ref([links[0]]);
    //   return links;
    // }

    if (btnName === 'logobtn') {
      logosRef.push(item);
    }

    if (btnName === 'imagebtn') {
      imageRef.push(item);
    }
    
    this.setState({
      currentItem: this.getNextImage()
    })
    // this.setState({
    //   currentLogo: '',
    //   username: ''
    // });
  }

  getNextImage() {
    const oldurl = this.state.currentItem;
    const state = {...this.state};
    console.log(state.links)

    state.links.forEach((link, i) => {
      console.log(oldurl, state.links[i])
      if (oldurl === link) {
        state.links.splice(i, 1);
        console.log('found', oldurl)
      }
    });
    console.log(state.links)

    this.setState(state);

    let myImage =  firebase.storage().ref(this.state.currentItem)
        myImage.getDownloadURL().then((url)=> {
        myImage.src = url;
        this.setState({currentUrl: url})
    })

    const newURL = state.links[0];

    return newURL;
  }
  
  // handleImage() {
  //   const fileRef = firebase.storage().ref('20171110_100240_1.jpg');
  //   fileRef.getDownloadURL().then((url)=>{
  //     myImage.src = url;
  //   });
  // }


  componentDidMount() {
    // const imageRef = firebase.database().ref('images');
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

  componentWillMount() {
    let myImage =  firebase.storage().ref(this.state.currentItem)
         myImage.getDownloadURL().then((url)=> {
         myImage.src = url;
         this.setState({currentUrl : url})
     })
 }

  render() {
    return (
      <div className='app'>
        <header>
          <div className="wrapper">
            <h1>Golf Tinder</h1> 
            <h5>Logo or Image?</h5>   
          </div>
          <div className='container'>
            <section className='add-item'>
              <form>
                {/* <input type="text" name="username" onChange={this.handleChange}  value={this.state.username} /> */}
                {/* <input type="text" name="currentItem" onChange={this.handleChange} value={this.state.currentItem} /> */}
              </form>
              {/* <input
                style={{display: 'none'}}
                type="file"
                onChange={this.fileSelectedHandler}
                ref={fileInput => this.fileInput = fileInput}/> */}
              {/* <button onClick={() => this.fileInput.click()}>Pick File</button> */}
              {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
            </section>   
            </div> 
      </header>

        
          <MyImage image={this.state.currentUrl} />
          <div className="topButtons">
            <button className="Logo"
            name="logo" 
            onClick={(e, btn) => this.handleSubmit(e,'logobtn')}
            // onChange={this.handleChange} 
            value={this.state.currentItem}>Logo</button>

            <button className="Image" 
            name="image" 
            onClick={(e, btn) => this.handleSubmit(e,'imagebtn')} 
            value={this.state.currentItem}>Image</button>
          </div>
            
          <div className="bottomButtons">  
            <button className="Delete" name="delete">Delete</button>
            <button className="Undo" name="undo">Undo</button>
          </div>
    </div>
      
    );
  }
}
export default App;
