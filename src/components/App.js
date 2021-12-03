import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import BetterThanYTPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import RelatedVideosPanel from './RelatedVideosPanel/RelatedVideosPanel';
import Comments from './Comments/Comments';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          playerVideo: "",
          videoId: "a1sBxSKZLSA",
          videoTitle: "",
          videoDescription: "",
          videoThumbNail: "",
          relatedVideos: [],
      };
  }

  componentDidMount(){
    this.getVideos();
    // this.getRelatedVideos();
}

  getVideos = async (searchbarInput) => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6Utc98GGg3lTTh6KRcLbSAQIng7jm_Y8&maxResults=5&type=video&part=snippet&q=${searchbarInput}`);
      console.log(response.data.items[0].id.videoId);

      let fetchedVideo = "https://www.youtube.com/embed/" + response.data.items[0].id.videoId
      let fetchedVideoId = response.data.items[0].id.videoId
      let fetchedTitle = response.data.items[0].snippet.title
      let fetchedDescription = response.data.items[0].snippet.description
      let fetchedThumbNail = response.data.items[0].snippet.thumbnails.default.url
      let fetchedRelatedVideos = response.data.items
      
      console.log(fetchedVideo)
      this.setState({
        playerVideo: fetchedVideo,
        videoId: fetchedVideoId,
        videoTitle: fetchedTitle,
        videoDescription: fetchedDescription,
        videoThumbNail: fetchedThumbNail,
        relatedVideos: fetchedRelatedVideos
      })
    }
    catch(err){
        console.log("Error getting the video", err)
    }
}

  getRelatedVideos = async () => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6Utc98GGg3lTTh6KRcLbSAQIng7jm_Y8&maxResults=5&type=video&part=snippet&relatedToVideoId=${this.state.videoId}`);

      this.setState({
        relatedVideos: response.data.items
      });
      console.log(this.state.relatedVideos)
    }
    catch(err){
      console.log("Error getting related videos", err)
    }
  }

  // getRelatedVideosToVideo = async () => {
  //   try{
  //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU&maxResults=5&type=video&part=snippet&relatedToVideoId=${this.state.videoId}`);

  //     this.setState({
  //       relatedVideos: response.data.items
  //     });
  //     console.log(this.state.relatedVideos)
  //   }
  //   catch(err){
  //     console.log("Error getting related videos", err)
  //   }
  // }

  // newVideo = (input) => {
  //   let thePlayerVideo = "https://www.youtube.com/embed/" + input
  //   this.state.playerVideo = thePlayerVideo
  //   this.state.videoId = input
  //   this.setState({
  //     videoId: this.state.videoId,
  //     playerVideo: this.state.playerVideo
  //   });
  // }
 
  // componentDidUpdate(){
  //   if(this.state.videoId !== prevState.videoId)

  // }

   
  render(){
    return(
      <div className="container--xxl">
      <SearchBar theGetVideos = {this.getVideos} theGetRelatedVideos = {this.getRelatedVideos} theVideoComments = {this.videoComments}/>
      <BetterThanYTPlayer thePlayerVideo = {this.state.playerVideo} theVideoTitle = {this.state.videoTitle} theVideoDescription = {this.state.videoDescription}/>
      <RelatedVideosPanel theRelatedVideos = {this.state.relatedVideos} getRelatedVideos = {this.getRelatedVideos} theVideoId = {this.state.videoId}/>
      <Comments theVideoId = {this.state.videoId}/>
      </div>
    )
  }
}

export default App;