import React, {Component} from 'react';
import PropTypes from 'prop-types';
import search_img from "./../ico/search.png"

import "./../css/bootstrap.min.css";
import "./../css/main.css";

class Search extends Component{
    render(){
        return(
            <section className="topsection">
                <input type="text" name="search" id="search" value={this.props.keyword} placeholder={this.props.placeholder} onChange={this.props.doSearch}/>
            </section>
        )
    }
}

Search.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}

export default Search;