import './RelatedVideosPanel.css';
import React, {useState, useEffect} from 'react';



const RelatedVideosPanel = ({theVideoId, theRelatedVideos, getRelatedVideos}) => {
    const [videoId, setVideoId] = useState(theVideoId)
    useEffect(()=>{getRelatedVideos()}, [videoId])
    let relatedVideosPanel = theRelatedVideos.map((videoObject) => {
        if(videoObject.snippet != undefined){
            return(
                <div>
                    <img className="video-thumbnail" src={videoObject.snippet.thumbnails.default.url} alt="video thumbnail"/>
                    <h4 className="related-video-title">{videoObject.snippet.title}</h4>
                </div>
            )
        }
    });
        return(
            <div className="related-videos-area">
                <div><h2 className="related-panel-title">Related Videos</h2></div>
                <div className="related-tiles">{relatedVideosPanel}</div>
            </div>
        );
    };

export default RelatedVideosPanel;

// onClick = {props.theGetRelatedVideos(videoObject.id.videoId)}
// this.state.videoId