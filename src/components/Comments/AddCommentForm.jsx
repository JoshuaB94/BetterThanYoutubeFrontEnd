import React, { Component } from 'react';
import axios from 'axios';

class AddCommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoId: "",
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
        this.setState({
            videoId: this.props.thatVideoId,
            text: this.state.text
        })
        this.props.theAddComment(this.state);
    }

    render(){
        return(
            <div>
                <form>
                    <label>Add Comment</label>
                    <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        )
    }
}

export default AddCommentForm