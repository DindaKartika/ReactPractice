import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import logofoot from "./../logo/logo-alterra-academy-plain@2x.png";

import facebook from "./../ico/ico-facebook@2x.png";
import twitter from "./../ico/ico-twitter@2x.png";
import instagram from "./../ico/ico-instagram@2x.png";

class Footer extends Component {
  render() {
    return (
      <div>
          <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-12 col-12">
                <img className="logo-foot" src={logofoot} />
                <br />
                <label className="copy-right">
                  &copy Copyright Alterra Group 2019
                </label>
              </div>
              <div className="col-md-5 col-sm-12 col-12" />
              <div className="col-md-3 col-sm-12 col-12">
                <div className="media-social">
                  <label id="label-sosmed">Follow us on</label>
                  <div className="row">
                    <div className="col-md-3 col-sm-2 col-5">
                      <div className="pict-sos">
                        <a href="http://www.facebook.com">
                          <img src={facebook} />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-10 col-7">
                      <label className="content-sos">
                        <a href="http://www.facebook.com">Facebook</a>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-2 col-5">
                      <div className="pict-sos">
                        <a href="http://www.twitter.com">
                          <img src={twitter} />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-10 col-7">
                      <label className="content-sos">
                        <a href="http://www.twitter.com">Twitter</a>
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 col-sm-2 col-5">
                      <div className="pict-sos">
                        <a href="http://www.instagram.com">
                          <img src={instagram} />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-10 col-7">
                      <label className="content-sos">
                        <a href="http://www.instagram.com">instagram</a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
