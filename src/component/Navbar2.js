import React, {Component} from 'react';
import {Link} from 'react-router-dom';

 class Navbar2 extends Component {
    constructor (props) {
        super(props)
        this.openNav = this.openNav.bind(this);
        // this.closeInForm = this.closeInForm.bind(this);
        // this.openInForm = this.openInForm.bind(this);
        // this.closeRegForm = this.closeRegForm.bind(this);
        // this.openRegForm = this.openRegForm.bind(this);
        this.hailingsSlide = this.hailingsSlide.bind(this);
    }

     openNav(e) {
        e.preventDefault();
        document.getElementById("my-nav").style.width = "350px";
      } 
    // closeInForm(e) {
    //     e.preventDefault();
    //     document.getElementById("reg-form").style.width = "0";
    //     document.getElementById("login-form").style.width = "0";
    //   }   
//    openInForm(e) {
//     e.preventDefault();
//         document.getElementById("login-form").style.width = "300px";
        //hides reg form when login is open
    //     document.getElementById("reg-form").style.width = "0";
    //   }
    // closeRegForm(e) {
    //     e.preventDefault();
    //     document.getElementById("reg-form").style.width = "0";
    //     document.getElementById("login-form").style.width = "0";
    //   }
    // openRegForm(e) {
    //     e.preventDefault();
    //     document.getElementById("reg-form").style.width = "300px";
    //     document.getElementById("login-form").style.width = "0";
    //   }


     hailingsSlide() {
        var controls = document.querySelectorAll(".controls");
        let time = 5000;
        for (var i = 0; i < controls.length; i++) {
          controls[i].style.display = "inline-block";
        }
      
        var slides = document.querySelectorAll("#slides .slide");
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide, time);
      
        function nextSlide() {
          goToSlide(currentSlide + 1);
        }
      
        function previousSlide() {
          goToSlide(currentSlide - 1);
        }
      
        function goToSlide(n) {
          
          slides[currentSlide].className = "slide";
          currentSlide = (n + slides.length) % slides.length;
          slides[currentSlide].className = "slide showing";
        }
      
        var playing = true;
        var pauseButton = document.getElementById("pause");
      
        function pauseSlideshow() {
          pauseButton.innerHTML = "&#9658;";
          playing = false;
          clearInterval(slideInterval);
        }
      
        function playSlideshow() {
          pauseButton.innerHTML = "&#10074;&#10074;";
          playing = true;
          slideInterval = setInterval(nextSlide, time);
        }
      
        pauseButton.onClick = function() {
          if (playing) {
            pauseSlideshow();
          } else {
            playSlideshow()
          }
        };
      
        var next = document.getElementById("next");
        var previous = document.getElementById("previous");
      
        next.onClick = function() {
          pauseSlideshow();
          nextSlide();
        };
        previous.onclick = function() {
          pauseSlideshow();
          previousSlide();
        };
      }
      
      
    
      

    render () {
        return (
 <div>
       {/* <div class="login-form" id="login-form">
    <a href="http" class="close-btn" onClick={this.closeInForm} id={this.hailingsSlide}>&times;</a>
         <form action="">
             <label for="email">
                 Your E-Mail Address
                 <input class="form-input" type="text" placeholder="Email Address" />
             </label>
             <label for="password">
                 Your Password
                 <input class="form-input" type="password" name="pass" id="pass" />
             </label>
             <input class="form-btn" type="submit" value="Login" />
             <label for="rememberme">
                 Remember Me
                 <input class="form-radio" type="radio" name="check" id="" />
             </label>
         </form> */}
         {/* <a className="lost-password" href="http">Lost Password</a>
         <button onClick={this.openRegForm} class="sign-login">New User</button>
     </div>
  
     <div className="sign-up-form" id="reg-form">
     <a href="http" className="close-btn" onClick={this.closeRegForm}>&times;</a>
     <form action="">
         <h4>
             Register in few easy steps on Hailings Cinema to Watch your favorite
             movies for free
         </h4>
         <label for="email">
             Enter Your E-Mail Address
             <input className="form-input" type="text" placeholder="Email Address" />
         </label> */}

         {/* <label for="password">
             Choose Your Password
             <input className="form-input" type="password" name="pass" id="pass" />
         </label>
         <input className="form-btn" type="submit" value="Register" />
     </form>

     <button onClick={this.openInForm} className="sign-login">Existing User</button>
 </div> */}

 <div className="hailings-hero-section">
 <div className="main-header">
     <div className="toggle-nav">
         <i className="material-icons nav-icon" onClick={this.openNav}>
             view_headline
         </i>
     </div>
     <div className="logo">
         <a href="index.html">
             <h1 className="logo-text" id="logo_text"> Hailing Cinema</h1>
         </a>

         <Link to ='/search' ><i className="fas fa-search"></i></Link>
         {/* <div className="login">
         <button className="reg-btn" onClick={this.openRegForm}>Sign Up</button>
         <button className="login-btn" onClick={this.openInForm}>Login</button>
         </div> */}
     </div>
   
    
        {/*
             <a href="search.html" class="search-link">
        <Navlink to='/hi'><i class="fas fa-search"></i></Navlink>
         </a>
        */}
     
     
    
     
 </div>
 <div className="hailings-slide-container">
     <div id="slides">
         {/* slide item container  */}
         <div className="slide showing">
              {/* slide item Wrapper */}
             <img src="images/maxresdefault4.jpg" alt="" />
             <div className="slide-movie-details">
                 <div className="hero-contents">
                     <div className="hcw hcw-content">
                         <h2>Full Cinema on the Go</h2>
                         <h3>Phones. Tablets. Tv</h3>
                         <p>
                             Thousands of movies and TV shows. Available Anywhere. Always Free.
                         </p>
                         <button className="hero-btn"> <a href="single.html">Start Watching</a> </button>
                     </div>
                 </div>
             </div>
             </div>
         {/* End of slide item container  */}


         <div id="slides">

             <div className="slide">
                 <img id="animated-slide-left" src="images/maxresdefault.jpg" alt="" />
                 <div className="slide-movie-details">
                     <div className="hero-contents">
                         <div className="hcw hcw-content">
                             <h2>Action Packed Movies</h2>
                             <h3>Phones. Tablets. Tv</h3>
                             <p>
                                 Thousands of movies and TV shows. Available Anywhere. Always Free.
                             </p>
                             <button className="hero-btn"> <a href="single.html">Start Watching</a> </button>
                         </div>
                     </div>
                 </div>
             </div>
              {/* End of slide item Wrapper  */}
         </div>
         {/* End of slide item container   */}
         <div className="slide">
             <img id="animated-slide-left" src="images/maxresdefault2.jpg" alt="" />
             <div className="slide-movie-details">
                 <div className="hero-contents">
                     <div className="hcw hcw-content">
                         <h2>Movies for the Family</h2>
                         <h3>No Subscription. No Cable TV</h3>
                         <p>
                             Thousands of movies and TV shows. Available Anywhere. Always Free.
                         </p>
                         <button className="hero-btn"> <a href="single.html">Start Watching</a> </button>
                     </div>
                 </div>
             </div>
         </div>
          {/* End of slide item Wrapper */}
         <div className="slide">
             <img id="animated-slide-left" src="images/maxresdefault3.png" alt="" />
             <div className="slide-movie-details">
                 <div className="hero-contents">
                     <div className="hcw hcw-content">
                         <h2>Movies from all Genres</h2>
                         <h3>Comedy. Horror. Nollywood</h3>
                         <p id='tryin'>
                             Thousands of movies and TV shows. Available Anywhere. Always Free.
                         </p>
                         <button className="hero-btn"> <a href="single.html">Start Watching</a> </button>
                       </div>
                 </div>
             </div>
         </div>
     </div>
   
     <div className="buttons">
         <button className="controls" id="previous" title="Previous Slide">&#10094</button>

        

         <button className="controls" id="next"    title="Next Slide">&#10095 </button>

     </div>
     {/* end of section  */}
 </div>
</div>




 </div>


 
        )
    }
}

export default Navbar2;