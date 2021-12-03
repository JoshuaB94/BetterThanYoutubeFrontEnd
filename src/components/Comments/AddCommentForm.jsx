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
                    <label>Add Comment</label>
                    <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        )
    }
}

export default AddCommentForm