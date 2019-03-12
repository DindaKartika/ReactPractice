import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./../css/bootstrap.min.css";
import "./../css/main.css";

import foto1 from "./../img/arkais.jpg";

const TopArticle = props => {
    return(
        <div className="row">
            <div className="col-md-3 d-md-block d-none">
                <h3 className="number"></h3>
            </div>
            <div className="col-md-9">
                <h5 class="isi-top-article">{props.title}</h5>
            </div>
        </div>
    )
}

TopArticle.propTypes = {
    title : PropTypes.string.isRequired
}


// class TopArticle extends Component {
//   render() {
//     return (
//       <div>
//         <section>
//           <div className="topArticle">
//                 <h3 className="titleTopArticle">Top Article</h3>
//                 <div className="row">
//                     <div className="col-md-3 d-md-block d-none">
//                         <h3 className="number">1</h3>
//                     </div>
//                     <div className="col-md-9">
//                         <h5>Arkais, Tuan Teh dan Nona Kopi</h5>
//                     </div>
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <div className="col-md-3 d-md-block d-none">
//                         <h3 className="number">2</h3>
//                     </div>
//                     <div className="col-md-9">
//                         <h5>Autumn in Paris</h5>
//                     </div>
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <div className="col-md-3 d-md-block d-none">
//                         <h3 className="number">3</h3>
//                     </div>
//                     <div className="col-md-9">
//                         <h5>Spring in London</h5>
//                     </div>
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <div className="col-md-3 d-md-block d-none">
//                         <h3 className="number">4</h3>
//                     </div>
//                     <div className="col-md-9">
//                         <h5>Perahu Kertas</h5>
//                     </div>
//                 </div>
//                 <hr/>
//                 <div className="row">
//                     <div className="col-md-3 d-md-block d-none">
//                         <h3 className="number">5</h3>
//                     </div>
//                     <div className="col-md-9">
//                         <h5>Dear Nathan</h5>
//                     </div>
//                 </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

export default TopArticle;
