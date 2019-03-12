import React, {Component} from 'react';
import MainRoute from './routes/MainRoute';
import {withRouter} from 'react-router-dom';

// import './styles/App.css';
import Navigation from "./component/header-blog.js";
import Footer from './component/footer.js'

class AppAjax extends Component{
    postSignOut = () =>{
        localStorage.removeItem('is_login');
        this.props.history.push("/");
        
    };
    render() {
        return(
            <div className="app">
                <Navigation postSignOut={this.postSignOut}/>
                <MainRoute/>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(AppAjax);