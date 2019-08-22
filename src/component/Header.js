import React from 'react';




const Header = () =>{
    return(
       <div className="Header">
       
        {/* start*/}
      <div className="">
      <div className="main-header">
          <div className="toggle-nav">
      {/*<i class="material-icons nav-icon" onClick={this.openNav}>
                  view_headline
              </i>*/}
         
          </div>
          <div className="logo">
              <a href="index.html">
                  <h1 className="logo-text" id="logo_text"> Hailing Cinema</h1>
              </a>
          </div>       
          <div className="login">
            {/*  <button class="reg-btn" onClick={this.openRegForm}>Sign Up</button>
              <button class="login-btn" onClick={this.openInForm}>Login</button>*/} 
          </div>
      </div>
   
     </div>
       {/*end*/}
       
       </div>
    )
}

export default Header;