import './VideoPlayer.css';
import React from 'react';


const BetterThanYTPlayer = (props) => {
    return (
        <div className="player-row">
            <div className="videoContainer">
                <iframe className="betterVideoPlayer"title="Embedded Youtube Video Player" id="ytplayer" type="text/html" 
                src={props.thePlayerVideo} frameborder="0"></iframe>
            </div>

            <div className="videoInfoContainer">
                <h3 className="betterVideoTitle">{props.theVideoTitle}</h3>
                <p className="betterVideoDesc">{props.theVideoDescription}</p>
            </div>
        </div>
    );
}

export default BetterThanYTPlayer;