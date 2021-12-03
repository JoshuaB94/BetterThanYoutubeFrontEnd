import React, { Component } from 'react';
import './AddCommentForm.css';

class AddCommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoId: this.props.thatVideoId,
            text: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.theAddComment(this.state);
    }

    render(){
        return(
            <div>
                <form>
                    <textarea className="form-control comment-textarea" rows="5" type="text" name="text" placeholder="Write a Comment..." onChange={this.handleChange} value={this.state.text}/>
                    <button className="comment-button" type="submit">Comment</button>
                </form>
            </div>
        )
    }
}

export default AddCommentForm