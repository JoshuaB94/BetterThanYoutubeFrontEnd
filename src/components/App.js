import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import BetterThanYTPlayer from './VideoPlayer/VideoPlayer';
import SearchBar from './SearchBar/SearchBar';
import RelatedVideosPanel from './RelatedVideosPanel/RelatedVideosPanel';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          playerVideo: "",
          videoId: "a1sBxSKZLSA",
          videoTitle: "",
          videoDescription: "",
          videoThumbNail: "",
          relatedVideos: []
      };
  }

  componentDidMount(){
    this.getVideos();
    this.getRelatedVideos();
}

  getVideos = async (searchbarInput) => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU&maxResults=5&type=video&part=snippet&q=${searchbarInput}`);
      console.log(response.data.items[0].id.videoId);

      let fetchedVideo = "https://www.youtube.com/embed/" + response.data.items[0].id.videoId
      let fetchedVideoId = response.data.items[0].id.videoId
      let fetchedTitle = response.data.items[0].snippet.title
      let fetchedDescription = response.data.items[0].snippet.description
      let fetchedThumbNail = response.data.items[0].snippet.thumbnails.default.url
      this.state.playerVideo = fetchedVideo
      this.state.videoId = fetchedVideoId
      this.state.videoTitle = fetchedTitle
      this.state.videoDescription = fetchedDescription
      this.state.videoThumbnail = fetchedThumbNail
      
      
      console.log(fetchedVideo)
      this.setState({
        playerVideo: this.state.playerVideo,
        videoId: this.state.videoId,
        videoTitle: this.state.videoTitle,
        videoDescription: this.state.videoDescription,
        videoThumbNail: this.state.videoThumbNail,
      })
    }
    catch(err){
        console.log("Error getting the video", err)
    }
}

  getRelatedVideos = async () => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU&maxResults=5&type=video&part=snippet&relatedToVideoId=${this.state.videoId}`);

      this.setState({
        relatedVideos: response.data.items
      });
      console.log(this.state.relatedVideos)
    }
    catch(err){
      console.log("Error getting related videos", err)
    }
  }
   

  render(){
    return(
      <div>
      <h1>Hi BetterThanYoutube!</h1>
      <BetterThanYTPlayer thePlayerVideo = {this.state.playerVideo} theVideoTitle = {this.state.videoTitle} theVideoDescription = {this.state.videoDescription}/>
      <SearchBar theGetVideos = {this.getVideos} theGetRelatedVideos = {this.getRelatedVideos}/>
      <RelatedVideosPanel theRelatedVideos = {this.state.relatedVideos} theVideoId = {this.state.videoId} theGetVideos = {this.getVideos}/>
      </div>
    )
  }
}

export default App;