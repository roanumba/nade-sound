import React, { Component} from 'react';

import './App.css';
import PlayerX from "./app/xsound/Playerx";
// import WaveMain from "./app/waveform/WaveMain";


class App extends Component {
    render() {
        return (
            <div className="App">
                    <PlayerX/>
                    {/*<WaveMain/>*/}
            </div>
        );
    }
}

export default App;
