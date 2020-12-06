import React, {Component, createRef} from 'react';
import {SoundXContext} from "../AudioProvider";


export class TimeOverviewAnalyzer extends Component {
    state = {
        range: {start: 0, end: 50},
        show: false,
        analyzer: null
    }

    static contextType = SoundXContext;
    canvasRef = createRef();

    componentDidMount() {
        this.context.audioListener.timeOverviewAnalyzer = this;

    }

    componentWillUnmount() {
        this.context.audioListener.timeOverviewAnalyzer = null;
    }

    loaded() {
        this.setState({show: true});

        /*     const canvas = this.canvasRef.current;
             this.context.audio.createOverviewAnalyzer(canvas);*/

    }

    loadSong = (songPath) => {
        const audio = this.context.audio;
        audio.doLoad(`${this.props.apiUrl}/audio/load/${songPath}`, {

            createAnalyzers: () => {
                const analyzer = audio.createAnalyzer();
                const canvas = this.canvasRef.current;
                analyzer.init(canvas);
             }
        })

    };

    setRange = (range) => {
        this.setState({range})
    }

    render() {

        const {w, h} = this.props;
        const {range, show} = this.state;


        const stop = () => {
            this.context.audio.stop();
        }
        const play = () => {
            this.context.audio.playRange(range.start, range.end);
        }

        return (
            <div>
                {
                <div>
                    <canvas ref={this.canvasRef} width={w} height={h}></canvas>
                    <br/>
                    <span>{range.start} sec</span> - <span>{range.end} sec</span><br/>
                    <button onClick={play}>play</button>
                    <button onClick={stop}>stop</button>
                </div>
                }

            </div>
        )
    }

}