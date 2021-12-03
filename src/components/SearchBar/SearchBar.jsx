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
        this.props.theGetVideos(this.state.search); // use .then ??
        // this.props.theGetRelatedVideos();
    }

    render(){
        return (
            <div className="container--xxl header-area">
                <div className="row">
                    <div className="col app-branding"><h1 className="app-name">BetterThanYoutube</h1>
                    </div>
                    <div className="col searchbar">
                        <form className="video-searchbar" onSubmit={this.handleSubmit}>
                             <div>
                         <input className="searchInput" name="search" onChange={this.handleChange} value={this.state.search} placeholder="Search for a Video..."/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;