import React, {Component, useState} from 'react';
import {AnimatePauseIcon, AnimatePlayIcon} from "../components/musicIcons";
import {SoundXContext} from "./AudioProvider";


export class ProgressX extends Component {
    static contextType = SoundXContext;

    state = {
        pos: 0,
        playing: false,
        max: 0,
        show: false
    };

    // const [pos, setPos] = useState(0);
    componentDidMount() {
        this.context.audioListener.progressX = this;
    }

    componentWillUnmount() {
        this.context.audioListener.progressX = null;
    }

    toggle = () => {
        this.context.audio.toggle();
        const playing = !this.state.playing;
        this.setState({playing});

    };
    stop = (pos) => {
        this.context.audio.stop()
    };

    progress = (pos) => {
        this.setState({pos});
    };

    changed = (e) => {
        const pos = e.target.value;
        this.setState({pos});
        this.context.audio.jumpTo(pos);
    };

    loaded = (duration) => {
        this.setState({max: duration});
        this.setState({show:true})
    }

    render() {
        const {max, pos, show,playing} = this.state;
        return (
            <div>
                {show &&
                    <div>
                        <div onClick={this.toggle}>{playing ? <AnimatePauseIcon/> : <AnimatePlayIcon/>}</div>
                        {Math.floor(pos)}<br/>
                        0-<input onChange={this.changed}
                                 type={"range"}
                                 min={0}
                                 max={max}
                                 value={pos}
                                 style={{width: 800}}
                    />-{Math.floor(max)}
                    </div>
                }
            </div>
        );
    }

}

