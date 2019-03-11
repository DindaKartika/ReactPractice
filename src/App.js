import React, { Component } from "react";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./App.css"

import Header from './component/header.js'
import Footer from './component/footer.js'
import HomeAtas from './page/homeAtas.js'
import HomeBawah from './page/homeBawah.js'
import Gallery from './page/gallery.js'
import Contact from './page/contact.js'
import HeaderBlog from './component/header-blog.js'
import Blog from './page/blog.js'

class App extends Component {
  render() {
    return (
      <div>

        {/* Index */}
        {/* <Header />
        <HomeAtas />
        <HomeBawah />
        <Footer /> */}

        {/* Gallery */}
        {/* <Header />
        <Gallery />
        <Footer /> */}

        {/* Contact */}
        {/* <Contact /> */}

        {/* Blog */}
        <HeaderBlog />
        <Blog/>
        <Footer />

      </div>
    );
  }
}

export default App;
