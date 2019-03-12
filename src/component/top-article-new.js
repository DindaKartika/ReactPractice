import React, { Component } from "react";
import axios from 'axios';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import TopArticles from "./top-article.js";

const urlTopNews = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=2a387c9cad674d258d97be8d34e65189';

class TopArticle extends Component {
    constructor(props){
        super(props);
        this.state = {
            listTopNews: [],
            username: "",
            isiLogin: false
        }
    }

    componentDidMount = () =>{
        const self = this;
        axios
            .get(urlTopNews)
            .then(function(response){
                self.setState({listTopNews: response.data.articles});
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
    }

  render() {

    const{listTopNews, username, isiLogin} = this.state;

    return (
      <div>
        <section>
          <div className="topArticle">
                <h3 className="titleTopArticle">Top Article</h3>
                  {listTopNews.map((item, key)=>{
                      return <TopArticles key = {key} title = {item.title} url={item.url}/>;
                  })}
          </div>
        </section>
      </div>
    );
  }
}

export default TopArticle;
