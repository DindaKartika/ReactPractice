import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import galleryicon from "./../ico/ico-gallery@2x.png";

import image1s from "./../img/exp-gallery/jake-allison-1322894-unsplash.jpg";
import image2 from "./../img/exp-gallery/jay-lee-1323073-unsplash.jpg";
import image3 from "./../img/exp-gallery/nic-yee-1321843-unsplash.jpg";
import image4 from "./../img/exp-gallery/nordwood-themes-1319985-unsplash.jpg";
import image5 from "./../img/exp-gallery/phil-desforges-1322844-unsplash.jpg";
import image6 from "./../img/exp-gallery/ryan-1321510-unsplash.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="container-gallery">
              <div className="row">
                <img src={galleryicon} className="gallery-image" />
                <div className="border-bawah">GALLERY</div>
              </div>
              <hr />
              <div className="container">
                <div className="kump-gambar">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image1s} className="image1" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image2} className="image1" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image3} className="image1" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image4} className="image1" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image5} className="image1" />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                      <div>
                        <img src={image6} className="image1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
