import React, { Component } from 'react';
import SwipeButtons from './SwipeButtons.js';
import Pictures from './Pictures';
import '../LandingPage.css';


class LandingPage extends Component {
    render() {
        return(
        <div className="maindiv">
   
        
        <SwipeButtons />
        

        <div class="row2">
            <div class="col-md-6">
                <button class="undo">Undo</button>
            </div>
            <div class="col-md-6">
                <button class="delete">Delete</button>
            </div>
        </div>
            









        </div>
        )
}

}

export default LandingPage;