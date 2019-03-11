import React, { Component } from "react";
import logo from "./../logo/logo-alterra-academy@2x.png";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

class Header extends Component {
  render() {
    return (
      <div>
          <header className="HeaderBlog">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                <a href="./index.html">
                  <img className="logo-head" src={logo} />
                </a>
              </div>
              <div className="col-lg-3 col-md-4 d-md-block d-none">
              </div>
              {/* <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                <ul className="nav">
                  <li clas="nav-item">
                    <a className="nav-link" href="./index.html">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./gallery.html">
                      GALLERY
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./blog.html">
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./contact.html">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
