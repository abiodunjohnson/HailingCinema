import React, { Fragment } from "react";
const Card = ({ poster, year, title }) => {
    return (
      <Fragment>
        <div className="card-container">
          <div className="card-group">
            <div className="card">
              <div className="card-img">
                <img src={poster} alt="" />
              </div>
              <div className="title">
                <p>Movie Title: {title}</p>
              </div>
              <div className="year">
                <p>Release Year: {year}</p>
              </div>
            </div>
          </div>
        </div>





        
      </Fragment>
    );
  };
  
  export default Card;