import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './../page/home.js'
import SignIn from './../page/signin.js'
import SignUp from './../page/signup.js'
import NotMatch from './../page/notmatch.js'
import Profiles from './../page/profile.js'
import Gallery from './../page/gallery.js'
import Contact from './../page/contact.js'
import Blog from './../page/blog.js'
import Business from './../page/blogBusiness.js'
import Entertainment from './../page/blogEntertainment.js'
import Health from './../page/blogHealth.js'
import Sport from './../page/blogSport.js'
import Technology from './../page/blogTechnology.js'

const MainRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/profiles" component={Profiles}/>
            <Route exact path="/business" component={Business}/>
            <Route exact path="/entertainment" component={Entertainment}/>
            <Route exact path="/health" component={Health}/>
            <Route exact path="/sport" component={Sport}/>
            <Route exact path="/technology" component={Technology}/>
            <Route component={NotMatch}/>
        </Switch>
    )
}

export default MainRoute;