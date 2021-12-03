import React, { Component } from 'react';
import axios from 'axios';
import AddCommentForm from './AddCommentForm';
import './Comments.css'

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            allComments: []
        };
    }

    componentDidMount(){
        this.videoComments();
    }

    componentDidUpdate(prevProps){
        if(this.props.theVideoId !== prevProps.theVideoId)
        this.videoComments();
    }

    videoComments = async() => {
        console.log(this.props.theVideoId)
        try{
            let response = await axios.get(`http://localhost:5000/api/comments/${this.props.theVideoId}`)
            console.log(response.data)
            let theComments = response.data // .items ?
            this.setState({
                allComments: theComments
            })
        }
        catch(err){
            console.log("Error getting comments", err)
          }
    }

    addComment = async(inputComment) => {
        try{
            let addedComment = await axios.post(`http://localhost:5000/api/comments`, inputComment)
            console.log(addedComment)
            this.state.allComments.push(addedComment)
            this.setState({
                allComments: this.state.allComments
            })
        }
        catch(err){
            console.log("Error posting new comment", err)
        }
    }

    // likeComment  = () => {
    //     return (  );
    // }
     
    // addReply  = () => {
    //     return (  );
    // }
    
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    // }
    


    render(){
        console.log(this.state.allComments)
        const allComments = this.state.allComments //create map function for allComments to render with html tags and style
        return(
            <div className="comments-container">
                <h2 className="comments-heading">Comments</h2>
                <AddCommentForm theAddComment = {this.addComment} thatVideoId = {this.props.theVideoId}/>
            </div>
        )
      }
}

export default Comments;