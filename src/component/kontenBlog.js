import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/arkais.jpg";

const ListNews = props => {
    return(
        <div className="isiblogs">
          <a href={props.url}>
            <div className="isiBlog">
              <div className="row">
                <div className="col-md-10">
                  <h3>{props.title}</h3>
                </div>
                <div className="col-md-2 d-md-block d-none">
                  <span>{props.date}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-6">
                  <img src={props.img} />
                </div>
                <div className="col-md-8 col-6">{props.content}</div>
              </div>
            </div>
          </a>
      </div>
    )
}

ListNews.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.string,
    content : PropTypes.string.isRequired,
    img : PropTypes.string,
    url : PropTypes.string
}

export default ListNews