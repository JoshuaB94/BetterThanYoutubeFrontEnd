import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import BetterThanYTPlayer from './VideoPlayer/VideoPlayer';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
          playerVideo: ""
      };
  }

  componentDidMount(){
    this.getVideos();
}

  getVideos = async (searchbarInput) => {
    try{
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCFkYBQpklfldTUUxy9csFQfWr4Z2ZQcdU&maxResults=5&type=video&q=Dr disrespect`); //Interpolate a SearchBar Input Function
      console.log(response.data.items[0].id.videoId);
      let fetchedVideo = "https://www.youtube.com/embed/" + response.data.items[0].id.videoId
      
      console.log(fetchedVideo)
      this.setState({
        playerVideo: fetchedVideo
      })
    }
    catch(err){
        console.log("Error getting the video", err)
    }
}
   

  render(){
    return(
      <div>
      <h1>Hi BetterThanYoutube!</h1>
      <BetterThanYTPlayer thePlayerVideo = {this.state.playerVideo}/>
      </div>
    )
  }
}

export default App;