import React, { Component } from 'react';
import '../../src/Buttons.css';

class Buttons extends Component {
    render() {
        return (
            <div className="parentdiv">
                <div className="container-fluid top">
                    <button className=".col-sm-2 .col-xl-6 leftbutton" onClick="LEFTLOGO"> ⬅ LOGO Database </button>
                    <button className=".col-sm-2 .col-xl-6 rightbutton" onClick="RIGHTIMAGE"> IMAGE Database ➡ </button>
                </div>
                

               
               <div className="container bottom">
                    <button className=".col-sm-6 .col-xl-3 undo" onClick="UNDO">UNDO</button>
                    <button className=".col-sm-6 .col-xl-3 delete" onClick="DELETEIMAGE">DELETE</button>
                </div>
                
        </div>
            
        )
    }

}

export default Buttons;