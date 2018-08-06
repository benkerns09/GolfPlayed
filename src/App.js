import React, { Component } from 'react';
import './App.css';
import firebase from './firebase.js';
import MyImage from './myImage.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '20171110_100240_4.jpg',
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
  }

  handleChange(e) {}

  handleSubmit(e, btn) {
    e.preventDefault();
    const btnName = btn
    const imageRef = firebase.database().ref('images');
    const logosRef = firebase.database().ref('logos');

    const item = {
      url: this.state.currentUrl,
    }

    if (btnName === 'logobtn') {
      logosRef.push(item);
    }

    if (btnName === 'imagebtn') {
      imageRef.push(item);
    }
    
    this.setState({
      currentItem: this.getNextImage()
    })

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
            <h1>Image Sorting App -- Golf Played</h1> 
            <h5>Logo or Image?</h5>   
          </div>
          <div className='container'>
            <section className='add-item'>
            </section>   
            </div> 
      </header>

        
          <MyImage image={this.state.currentUrl} />
          <div className="topButtons">
            <button className="Logo"
            name="logo" 
            onClick={(e, btn) => this.handleSubmit(e,'logobtn')}
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
