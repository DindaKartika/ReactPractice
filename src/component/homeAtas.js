import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import profpic from "./../img/profile-picture.jpeg";
import location from "./../ico/ico-location.png";

class HomeAtas extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="header-profile">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <div className="profile-content">
                  <img src={profpic} id="portrait" />
                  <div className="name">
                    <label>Hian Olieviera</label>
                  </div>
                  <div className="location">
                    <img src={location} />
                    <label>Malang, East Java, Indonesia</label>
                  </div>
                  <div className="profession">
                    <label>Front End Dev, UI/UX and Design</label>
                  </div>
                  <div className="view-profile">
                    <a href="#">
                      <button type="button" class="btn btn-primary">
                        Download CV
                      </button>
                    </a>
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

export default HomeAtas;
