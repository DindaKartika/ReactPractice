import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="border">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="about-me">
                    <span className="title">About Me</span>
                    <br />
                    <br />
                    <p>
                      Hi! I am <strong>Hian Olieviera</strong>, I work as a{" "}
                      <i>Front-End Developer</i> at{" "}
                      <span1>Alterra Group.</span1>
                    </p>
                    <p>
                      Front End Developer are constructive work websites use
                      HTML, CSS, and JavaScript
                    </p>
                    <p>
                      Front End Developer are the people who make it design and
                      develop the design until become a website that can run
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="information">
                    <span className="title">Information</span>
                    <br />
                    <br />
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
                        <td>
                          : Jl. Simpang Tambora I No. 9, <br />
                          Karang Besuki, Sukun, Malang, 65146
                        </td>
                      </tr>
                    </table>
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
