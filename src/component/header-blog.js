import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./../logo/logo-alterra-academy@2x.png";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import {connect} from 'unistore/react';
import {actions} from './../store.js';
import {withRouter} from 'react-router-dom';


class Header extends Component{
  render(){
      if(!this.props.is_login){
          return(
            <div>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                <Link to="/blog" className="nav-link">
                  <img className="logo-head" src={logo} />
                </Link>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                <ul className="nav">
                  <li clas="nav-item">
                    <Link to="/blog" className="nav-link">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profiles" className="nav-link">
                      PROFILE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link" id="signin">
                      SIGN IN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
          )
      }
      else{
          return(
            <div>
            <header>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                    <Link to="/blog" className="nav-link">
                      <img className="logo-head" src={logo} />
                    </Link>
                  </div>
                  <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                    <ul className="nav">
                      <li clas="nav-item">
                        <Link to="/blog" className="nav-link">
                          HOME
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/profiles" className="nav-link">
                          PROFILE
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/" onClick={() =>this.props.postSignOut()} className="nav-link" id="signout">
                          SIGN OUT
                        </Link>
                      </li>
                      {/* <li className="nav-item">
                        <Link to="/source/cnn-news" className="nav-link" id="signout">
                          CNN News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/source/bbc-news" className="nav-link" id="signout">
                          BBC News
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="nav nav-bawah" id="nav-bawah">
                      <li clas="nav-item">
                        <Link to='/source/abc-news' className="nav-link">
                          ABC News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/source/bbc-news' className="nav-link">
                          BBC News
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/source/ars-technica' className="nav-link">
                          Ars Technica
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/source/buzzfeed' className="nav-link">
                          Buzzfeed
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to='/source/cbc-news' className="nav-link">
                          CBC News
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>
          </div>
          )
      }
  }
}

export default connect("api_key, email, password, full_name, username, is_login", actions)(withRouter(Header))
