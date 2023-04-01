import React, { Fragment } from "react";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const MovieCarousel = (props) => {
  const movieList = props.movies.slice(10, 17);

  return (
    <Fragment>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {movieList.map((movie) => {
            return (
              <Link
                to={`/movies/${movie.genre[0]}/${movie.title}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="posterImage">
                  <img src={movie.image} alt="movie-poster" />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">
                    {movie ? movie.title : ""}
                  </div>
                  <div className="posterImage__runtime">
                    {movie ? movie.year : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.rating : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.description : ""}
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default MovieCarousel;
