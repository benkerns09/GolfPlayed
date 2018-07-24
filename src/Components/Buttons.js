import React, { Component } from 'react';
import '../../src/Buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div>
                <div className="SwipeButtons">
                    <button className="leftbutton" onClick="LEFTLOGO"> ⬅ LOGO </button>
                    <button className="rightbutton" onClick="RIGHTIMAGE"> IMAGE ➡ </button>
                </div>
                

               
                <div className="OtherButtons">
                    <button className="undo" onClick="UNDO">Undo</button>
                    <button className="delete" onClick="DELETEIMAGE">Delete</button>
                </div>
                
        </div>
            
        )
    }

}

export default Buttons;