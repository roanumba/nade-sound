import React, { Component} from 'react';

import './App.css';
import AudioPlayer from "./app/xsound/AudioPlayer";
// import WaveMain from "./app/waveform/WaveMain";


class App extends Component {
    render() {
        return (
            <div className="App">
                    <AudioPlayer/>
                    {/*<WaveMain/>*/}
            </div>
        );
    }
}

export default App;
