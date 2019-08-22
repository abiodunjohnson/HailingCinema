import React, { Fragment } from "react";
// import { defer } from "q";
const Card2 = ({ poster, year, title, actors, plot, genre, releasedDate }) => {
    return (
      <Fragment>
        <div className="card-container">
          <div className="card-group">
            <div className="card">
              <div className="card-img">
                <img src={poster} alt="" />
              </div>
              <div className="actors">
                <p>Actors: {actors}</p>
              </div>
              <div className="title">
                <p>Movie Title: {title}</p>
              </div>
              <div className="year">
                <p>Release Year: {year}</p>
              </div>
              <div className="releasedDate">
              <p>Release Year: {releasedDate}</p>
            </div>
            <div className="plot">
            <p>Plot: {plot}</p>
          </div>
          <div className="genre">
          <p>Release Year: {genre}</p>
        </div>
            </div>
          </div>
        </div>





        
      </Fragment>
    );
  };

  export default Card2;