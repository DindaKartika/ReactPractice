import React, { Component } from 'react';
import logo from './logo/logo-alterra-academy@2x.png';
import './assets/css/bootstrap.min.css';
import './assets/css/main.css';

import imagebawah from './assets/img/side-view.jpg';
import logo2 from './assets/logo/logo-alterra-academy-plain@2x.png';

import logofoot from './logo/logo-alterra-academy-plain@2x.png';
import facebook from './icon/ico-facebook@2x.png';
import twitter from './icon/ico-twitter@2x.png';
import instagram from './icon/ico-instagram@2x.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-lg-block d-none">
                    <img src={imagebawah} className="kontak"/>
                    <div className="warna-tumpukan">
                        <img src={logo2} className="logo-alterra"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contact-box">
                        <div className="title-contact">
                            <h2>Contact Us</h2>
                        </div>
                        <div className="box-kontak">
                            <span>Send us a message and we will get back to you as soon as possible</span>
                        </div>
                        <br/>
                        <form>
                            <div className="form-group">
                                <label for="name">Name <span3>*</span3></label><br/>                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email <span3>*</span3></label><br/>
                                <input type="text" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone Number <span3>*</span3></label><br/>
                                <input type="text" className="form-control" id="phone"/>
                            </div>
                            <div className="form-group">
                                <label for="national">National</label><br/>
                                <select className="custom-select custom-select-lg mb-3">
                                    <option selected></option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Singapura">Singapura</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label><br/>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                            </div>
                            <a href="#"><button type="submit" className="btn btn-secondary">Submit</button></a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;