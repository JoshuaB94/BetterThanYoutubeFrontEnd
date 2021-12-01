import './VideoPlayer.css';
import React, {Component} from 'react';


const BetterThanYTPlayer = (props) => {
    return (
        <div>
            <iframe title="Embedded Youtube Video Player" id="ytplayer" type="text/html" width="740" height="370"
            src={props.thePlayerVideo} frameborder="0"></iframe>
            <h1>{props.theVideoTitle}</h1>
            <p>{props.theVideoDescription}</p>
        </div>
    );
}

export default BetterThanYTPlayer;