import React,{useState,useContext} from 'react';
import {TechniqueManager} from "./TechniqueManager";
import {ProgressX} from "./ProgressX";
import {SongLoader} from "./SongLoader";
import {FFTAnalyze} from "./analyzers/FFTAnalyze";
import {TimeAnalyze} from "./analyzers/TimeAnalyze";
import {TimeOverviewAnalyzer} from "./analyzers/TimeOverviewAnalyzer";
import {SoundXContext} from "./AudioProvider";


const apiUrl = "http://localhost:3030";


const PlayerX = () => {

    return (

        <div>
            <SongLoader apiUrl={apiUrl} />
            <FFTAnalyze key={1} w={80} h={50}/>
            <TimeAnalyze key={2} w={150} h={50}/>
            <ProgressX/>


                <TimeOverviewAnalyzer apiUrl={apiUrl} key={"analyzer"} w={800} h={100} />

            <TechniqueManager/>

        </div>
    );

};

export default PlayerX;