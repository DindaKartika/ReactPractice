import React, { Component } from 'react';
import logo from './logo/logo-alterra-academy@2x.png';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

import galleryicon from './icon/ico-gallery@2x.png';

import image1s from './assets/img/exp-gallery/jake-allison-1322894-unsplash.jpg';
import image2 from './assets/img/exp-gallery/jay-lee-1323073-unsplash.jpg';
import image3 from './assets/img/exp-gallery/nic-yee-1321843-unsplash.jpg';
import image4 from './assets/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg';
import image5 from './assets/img/exp-gallery/phil-desforges-1322844-unsplash.jpg';
import image6 from './assets/img/exp-gallery/ryan-1321510-unsplash.jpg';

import logofoot from './assets/logo/logo-alterra-academy-plain@2x.png';
import facebook from './assets/ico/ico-facebook@2x.png';
import twitter from './assets/ico/ico-twitter@2x.png';
import instagram from './assets/ico/ico-instagram@2x.png';

class App extends Component {
  render() {
    return (
      <div>
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                        <a href="./index.html"><img className="logo-head" src={logo}/>></a>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="./index.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="./gallery.html">GALLERY</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contact.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="container">
                <div className ="container-gallery">
                    <div className="row">
                        <img src={galleryicon} className="gallery-image"/>
                        <div className="border-bawah">GALLERY</div>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="kump-gambar">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image1s} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image2} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image3} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image4} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image5} className="image1"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div>
                                        <img src={image6} className="image1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <img className="logo-foot" src={logofoot}/>
                        <br/>
                        <label className="copy-right">&copy Copyright Alterra Group 2019</label>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12"></div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="media-social">
                            <label id="label-sosmed">Follow us on</label>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="http://www.facebook.com"><img src={facebook}/></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="http://www.facebook.com">Facebook</a></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="http://www.twitter.com"><img src={twitter}/>></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="http://www.twitter.com">Twitter</a></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-sm-2 col-5">
                                    <div className="pict-sos">
                                        <a href="http://www.instagram.com"><img src={instagram}/></a>
                                    </div>
                                </div>
                                <div className="col-md-9 col-sm-10 col-7">
                                    <label className="content-sos"><a href="http://www.instagram.com">instagram</a></label>
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

export default App;