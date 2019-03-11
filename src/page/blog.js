import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import TopArticle from './../component/top-article.js'
import KontenBlog1 from './kontenBlog1.js'
import KontenBlog2 from './kontenBlog2.js'
import KontenBlog3 from './kontenBlog3.js'
import KontenBlog4 from './kontenBlog4.js'
import KontenBlog5 from './kontenBlog5.js'

import search from "./../ico/search.png"

class Blog extends Component {
  render() {
    return (
      <div className="blogs">
          <div className="row">
            <div className="col-md-3">
                <div className="sidebar">
                    <form href="./search.html" className="searchForm">
                        <button type="submit" className="searchButton"><img src={search}/></button>
                        <input type="text" className="search"/>
                    </form>
                    <TopArticle/>
                </div>
            </div>
            <div className="col-md-9">
                <KontenBlog1/>
                <hr/>
                <KontenBlog2/>
                <hr/>
                <KontenBlog3/>
                <hr/>
                <KontenBlog4/>
                <hr/>
                <KontenBlog5/>
            </div>
          </div>
      </div>
    );
  }
}

export default Blog;
