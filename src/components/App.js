import React, {Component, useState} from "react";
import '../styles/App.css';
import Flame from "./Flame";

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <Flame />
            </div>
        )
    }
}


export default App;
