// eslint-disable-next-line
import React, {Component} from 'react';

  export const Footer = () => {
    // render () {
        return (
    
 <div className="container inside-footer">
 <div className="row text-center">

     <div className="col-lg-3">
         <a href="http" className="navbar-brand"  id="footer-logo"> Hailing Cinema</a>
     </div>


     <div className="col-lg-3">
         <h3>Hailings Cinema </h3>
          {/* a line ought to be here*/}
         <a href="http">
             <p className="p-text-footer">Pricing</p>
         </a>
         <a href="http">
             <p className="p-text-footer">Upload</p>
         </a>
         <a href="http">
             <p className="p-text-footer">Download</p>
         </a>

     </div>



     <div className="col-lg-3">
         <h3>Features</h3>
          {/* a line ought to be here*/}
         <a href="http">
             <p className="p-text-footer">Free Trial</p>
         </a>
         <a href="http">
             <p className="p-text-footer">Sign Up</p>
         </a>
         <a href="http">
             <p className="p-text-footer">Help Center</p>
            
         </a>

     </div>


     <div className="col-lg-3">
         <h3>Follow Us </h3>
          {/* a line ought to be here*/}
          <a href="http"><i id="awesome1"  className="fab fa-twitter icon"></i></a>
          <a href="http"><i id="awesome1"  className="fab fa-instagram icon"></i></a>
          <a href="http"><i id="awesome1"  className="fab fa-facebook-f icon"></i></a>
          <a href="http"><i id="awesome1"  className="fab fa-youtube icon"></i></a>
          <a href="http"><i id="awesome1"  className="fab fa-google-plus-g icon"></i></a>
        
     </div>
 </div>
</div> 
        )
    }


