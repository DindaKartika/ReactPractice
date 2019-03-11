import React, { Component } from 'react';
import logo from './logo/logo-alterra-academy@2x.png';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

import profpic from './assets/img/profile-picture.jpeg';
import location from './assets/ico/ico-location.png';
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
                        <a href="./index.html"><img className="logo-head" src={logo}/></a>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                        <ul className="nav">
                            <li clas="nav-item">
                                <a className="nav-link active" href="./index.html">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./gallery.html">GALLERY</a>
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
            <div className="header-profile">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-12">
                        <div className="profile-content">
                            <img src={profpic} id="portrait"/>
                            <div className="name">
                                <label>Hian Olieviera</label>
                            </div>
                            <div className="location">
                                <img src={location}/>
                                <label>Malang, East Java, Indonesia</label>
                            </div>
                            <div className="profession">
                                <label>Front End Dev, UI/UX and Design</label>
                            </div>
                            <div className="view-profile">
                                <a href="#"><button type="button" class="btn btn-primary">Download CV</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="border">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-me">
                                <span className="title">About Me</span>
                                <br/>
                                <br/>
                                <p>Hi! I am <strong>Hian Olieviera</strong>, I work as a <i>Front-End Developer</i> at <span1>Alterra Group.</span1></p>
                                <p>Front End Developer are constructive work websites use HTML, CSS, and JavaScript</p>
                                <p>Front End Developer are the people who make it design and develop the design until become a website that can run</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="information">
                                <span className="title">Information</span>
                                <br/>
                                <br/>
                                <table>
                                    <tr>
                                        <td className="tab-title">Age</td>
                                        <td>: 22 th</td>
                                    </tr>
                                    <tr className="tab-even">
                                        <td className="tab-title">Email</td>
                                        <td>: hian.olievera@alterra.id</td>
                                    </tr>
                                    <tr>
                                        <td className="tab-title">Address</td>
                                        <td>: Jl. Simpang Tambora I No. 9, <br/>Karang Besuki, Sukun, Malang, 65146</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-sm-12 col-12">
                        <img className="logo-foot" src={logofoot}/>
                        <br/>
                        <label className="copy-right">&copy Copyright Alterra Group 2019</label>
                    </div>
                    <div className="col-md-5 col-sm-12 col-12"></div>
                    <div className="col-md-3 col-sm-12 col-12">
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
                                        <a href="http://www.twitter.com"><img src={twitter}/></a>
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
