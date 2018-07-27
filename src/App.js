import React, { Component } from 'react';
import './App.css';//styling for app component
import Buttons from './Components/Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="ImageButtons">
          <h1 className="App-title">Logo or Image?</h1>
            <Buttons />
        </body>
      </div>
    );
  }
}

export default App;
