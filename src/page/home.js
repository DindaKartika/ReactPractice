import React, { Component } from "react";
import "./../css/bootstrap.min.css";
import "./../css/main.css";
// import "./App.css"

import HomeAtas from './../component/homeAtas.js'
import HomeBawah from './../component/homeBawah.js'

class App extends Component {
  render() {
    return (
      <div>
        <HomeAtas />
        <HomeBawah />
      </div>
    );
  }
}

export default App;
