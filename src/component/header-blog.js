import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "./../logo/logo-alterra-academy@2x.png";
import "./../css/bootstrap.min.css";
import "./../css/main.css";

const Header = props => {
    return (
      <div>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                <Link to="/blog" className="nav-link">
                  <img className="logo-head" src={logo} />
                </Link>
              </div>
              <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                <ul className="nav">
                  <li clas="nav-item">
                    <Link to="/blog" className="nav-link">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profiles" className="nav-link">
                      PROFILE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signin" className="nav-link">
                      SIGN IN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      SIGN UP
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav bawah">
                  <li clas="nav-item">
                    <Link to="/business" className="nav-link">
                      BUSINESS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/entertainment' className="nav-link">
                      ENTERTAINMENT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/health' className="nav-link">
                      HEALTH
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/sport' className="nav-link">
                      SPORT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/technology' className="nav-link">
                      TECHNOLOGY
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  
}

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <header>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-lg-3 col-md-4 col-sm-12 col-12">
//                 <a href="./index.html">
//                   <img className="logo-head" src={logo} />
//                 </a>
//               </div>
//               <div className="col-lg-9 col-md-8 col-sm-12 col-12">
//                 <ul className="nav">
//                   <li clas="nav-item">
//                     <a className="nav-link" href="./index.html">
//                       HOME
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./gallery.html">
//                       PROFILE
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./blog.html">
//                       SIGN IN
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./contact.html">
//                       SIGN UP
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <ul className="nav bawah">
//                   <li clas="nav-item">
//                     <a className="nav-link" href="./index.html">
//                       BUSINESS
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./gallery.html">
//                       ENTERTAINMENT
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./blog.html">
//                       HEALTH
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./contact.html">
//                       SPORT
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="./contact.html">
//                       TECHNOLOGY
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default Header;
