import React, { Component } from 'react';
import '../../src/SwipeButtons.css';
import './myImage.js';


class SwipeButtons extends Component {
    render() {
        return(
            <div>
                <button className="leftbutton" onClick="LEFTLOGO"> ⬅ LOGO </button>
                
                <button className="rightbutton" onClick="RIGHTIMAGE"> IMAGE ➡ </button>
            </div>

        )

    }

}

export default SwipeButtons;