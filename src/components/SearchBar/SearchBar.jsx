import './SearchBar.css';
import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={
            search: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.theGetVideos(this.state.search);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="search" onChange={this.handleChange} value={this.state.search}/>
                </div>
                <div>
                    <button type="submit" className="mt-3">Search Videos</button>
                </div>
            </form>
        );
    }
}

export default SearchBar;