import React, {Component} from 'react';

export class LatestRelease extends Component {
    render () {
        return (
            
       <div className="wrapper">
       <div className="category-title">
           <h2 className="late"> Latest Release</h2>

       </div>
       <div className="hailings-movie-card-wrapper ">
           <div className="hailings-movie-card-content">
               <div className="hailings-header-title">
                   <h3>Avengers: End Game</h3>
               </div>
               <div className="hailings-movie-header">
                   <div className="hailings-header-rating">
                       <p>PG 13</p>
                   </div>
                   <div className="hailings-header-star">
                       <i className="material-icons">
                           star
                       </i>
                       <i className="material-icons">
                           star_half
                       </i>
                       <i className="material-icons">
                           star_border
                       </i>
                   </div>
               </div>
               {/* Header contains the meta details of the movie  */}
               <section className="hailings-movie-thumb-sm">
               
                   <img src='/images/avengers.jpg' alt="Avengers" srcSet="" />
                </section> 
           </div>
           {/* end of movie card */}
           <div className="hailings-movie-card-content">
               <div className="hailings-header-title">
                   <h3>Shazam</h3>
               </div>
               <header className="hailings-movie-header">
                   <div className="hailings-header-rating">
                       <p>PG 13</p>
                   </div>
                   <div className="hailings-header-star">
                       <i className="material-icons">
                           star
                       </i>
                       <i className="material-icons">
                           star_half
                       </i>
                       <i className="material-icons">
                           star_border
                       </i>
                   </div>
               </header>
               {/* Header contains the meta details of the movie */}
               <section className="hailings-movie-thumb-sm">
                   <img src="/images/shazam.jpg" alt="Avengers" srcSet="" />
               </section>
           </div>
           {/* end of movie card */}
           <div className="hailings-movie-card-content">
               <div className="hailings-header-title">
                   <h3>Spiderman: Far from Home</h3>
               </div>
               <div className="hailings-movie-header">
                   <div className="hailings-header-rating">
                       <p>PG 13</p>
                   </div>
                   <div className="hailings-header-star">
                       <i className="material-icons">
                           star
                       </i>
                       <i className="material-icons">
                           star_half
                       </i>
                       <i className="material-icons">
                           star_border
                       </i>
                   </div>
               </div>
               {/* Header contains the meta details of the movie */}
               <section className="hailings-movie-thumb-sm">
                   <img src='/images/spiderman.jpeg' alt="Avengers" srcSet="" />
               </section>
           </div>
           {/* end of movie card */}
           <div className="hailings-movie-card-content">
               <div className="hailings-header-title">
                   <h3>X-Men: dark Pheonix</h3>
               </div>
               <div className="hailings-movie-header">
                   <div className="hailings-header-rating">
                       <p>PG 13</p>
                   </div>
                   <div className="hailings-header-star">
                       <i className="material-icons">
                           star
                       </i>
                       <i className="material-icons">
                           star_half
                       </i>
                       <i className="material-icons">
                           star_border
                       </i>
                   </div>
               </div>
                {/* Header contains the meta details of the movie */}
               <section className="hailings-movie-thumb-sm">
                   <img src="/images/darkpheonix.png" alt="Avengers" srcSet="" />
               </section>
           </div>
            {/* end of movie card  */}
           <div className="hailings-movie-card-content">
               <div className="hailings-header-title">
                   <h3>Lion King</h3>
               </div>
               <div className="hailings-movie-header">
                   <div className="hailings-header-rating">
                       <p>PG 13</p>
                   </div>
                   <div className="hailings-header-star">
                       <i className="material-icons">
                           star
                       </i>
                       <i className="material-icons">
                           star_half
                       </i>
                       <i className="material-icons">
                           star_border
                       </i>
                   </div>
               </div>
                {/* Header contains the meta details of the movie */}
               <section className="hailings-movie-thumb-sm">
                   <img src="/images/lionking.jpeg" alt="Avengers" srcSet="" />
               </section>
           </div>
            {/* end of movie card */}

            </div>
        </div>
        )
    }
}