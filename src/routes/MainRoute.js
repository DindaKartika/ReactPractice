import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/blog.js'
import SignIn from './../page/signin.js'
import SignUp from './../page/signup.js'
import NotMatch from './../page/notmatch.js'
import Profiles from './../page/profile.js'
import Gallery from './../page/gallery.js'
import Contact from './../page/contact.js'
import Blog from './../page/blog.js'
// import BlogSource from './../page/blogsource.js'
import Buzzfeed from './../page/blogBuzzfeed.js'
import BBC from '../page/blogBBC.js'
import ARS from '../page/blogARS.js'
import ABC from './../page/blogABC.js'
import CBC from './../page/blogCBC.js'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/blog" component={Blog}/>
            {/* <Route path="/sources" component={BlogSource} */}
            <Route exact path="/profiles" component={Profiles}/>
            <Route exact path="/source/buzzfeed" component={Buzzfeed}/>
            <Route exact path="/source/bbc-news" component={BBC}/>
            <Route exact path="/source/ars-technica" component={ARS}/>
            <Route exact path="/source/abc-news" component={ABC}/>
            <Route exact path="/source/cbc-news" component={CBC}/>
            <Route component={NotMatch}/>
        </Switch>
    )
}

export default MainRoute;