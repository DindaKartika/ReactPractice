import React, { Component } from "react";
import axios from 'axios';

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';


import "./../css/bootstrap.min.css";
import "./../css/main.css";

import TopArticle from './../component/top-article-new.js'
import ListNews from './../component/kontenBlog.js'
import Search from './../component/search.js'

import search_img from "./../ico/search.png"

import foto from './../img/side-view.jpg'

const az = {foto}
const urlNews = 'https://newsapi.org/v2/everything?apiKey=2a387c9cad674d258d97be8d34e65189&sources=cbc-news';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      listNews: [],
      username: "",
      isiLogin: false
    }
  }

  componentDidMount = () =>{
    const self = this;
    axios
      .get(urlNews)
      .then(function(response){
        self.setState({listNews: response.data.articles});
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  render() {

    const {listNews, username, isiLogin} = this.state;

    return (
      <div className="blogs">
          <div className="row">
            <div className="col-md-3">
                <div className="sidebar">
                    <form href="./search.html" className="searchForm">
                    <Search placeholder="Search..." doSearch= {e => this.handleInputChange(e)}/>
                    </form>
                    <TopArticle/>
                </div>
            </div>
            <div className="col-md-9">
                {listNews.map((item, key) => {
                  const src_img = item.urlToImage === null ? az : item.urlToImage;
                  const content = item.urlToImage !== null ? item.content: "";
                  return <ListNews key ={key} url={item.url} title={item.title} img={src_img} date={item.date} content={content}/>;
                })}
            </div>
          </div>
      </div>
    );
  }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(Blog))
