import './RelatedVideosPanel.css';
import React from 'react';

const RelatedVideosPanel = (props) => {
    let xyz = props.theRelatedVideos.map((videoObject) => {
        if(videoObject.snippet != undefined){
            return(
                <div>
                    {videoObject.snippet.thumbnails.default.url}
                    <h4>{videoObject.snippet.title}</h4>
                </div>
            )
        }
    });
        return(
            <div>
                {xyz}
            </div>
        );
    };
    

export default RelatedVideosPanel;

// onClick = {props.theNewVideo(videoObject.id.videoId)}