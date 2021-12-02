import './RelatedVideosPanel.css';
import React, {useState, useEffect} from 'react';



const RelatedVideosPanel = ({theVideoId, theRelatedVideos, getRelatedVideos}) => {
    const [videoId, setVideoId] = useState(theVideoId)
    useEffect(()=>{getRelatedVideos()}, [videoId])
    let xyz = theRelatedVideos.map((videoObject) => {
        if(videoObject.snippet != undefined){
            return(
                <div>
                    <img src={videoObject.snippet.thumbnails.default.url} alt="video thumbnail"/>
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

// onClick = {props.theGetRelatedVideos(videoObject.id.videoId)}
// this.state.videoId