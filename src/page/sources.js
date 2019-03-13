import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';


import "./../css/bootstrap.min.css";
import "./../css/main.css";

import TopArticle from './../component/top-article-new.js'
import ListNews from './../component/kontenBlog.js'
import Search from './../component/search.js'

import foto from './../img/side-view.jpg'

const az = {foto}

const baseUrl = 'https://newsapi.org/v2/'
const key = '2a387c9cad674d258d97be8d34e65189'

// const sourcePath = this.match.params.Sources

// const urlNews = baseUrl + "everything?sources=" + sourcePath + "&language=en&apiKey=" + key
// const urlNews = 'https://newsapi.org/v2/everything?apiKey=2a387c9cad674d258d97be8d34e65189&sources=abc-news&language=en'

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
    const sourcePath = this.props.match.params.Sourcers;
    const urlNews = baseUrl + "everything?sources=" + sourcePath + "&language=en&apiKey=" + key;
    axios
      .get(urlNews)
      .then(function(response){
        console.log(urlNews)
        self.setState({listNews: response.data.articles});
        console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      })
  }

  handleInputChange = e =>{
    console.log('event', e.target.value);
    let value = e.target.value;

    this.setState({
      search:value
    },
    ()=>{
      this.searchNews(value);
    })
  }

  searchNews = async keyword =>{
    console.log('searchNews', keyword);
    const self = this;
    if(keyword.length > 2){
      try{
        const response = await axios.get(
          baseUrl + "everything?q=" + keyword + "&language=en&apiKey=" + key
        )
        console.log(response);
        self.setState({listNews: response.data.articles})
      }
      catch(error){
        console.error(error);
      }
    }
  }

  render() {

    const {listNews, username, isiLogin} = this.state;

    if(!this.props.is_login){
      return <Redirect to={{pathname:"/signin"}}/>
  }
  else{
      return(
        //   {match.params}
        <div className="blogs">
            <div className="row">
              <div className="col-md-3">
                  <div className="sidebar">
                      <Search doSearch= {e => this.handleInputChange(e)}/>
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
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(Blog))


