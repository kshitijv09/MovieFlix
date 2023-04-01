import React, { Fragment, useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const movie = props.mov;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="card-section">
      {movie.map((movie) => {
        return (
          <>
            {isLoading ? (
              <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                  <Skeleton height={300} duration={2} />
                </SkeletonTheme>
              </div>
            ) : (
              <Link
                to={`/movies/${movie.genre[0]}/${movie.title}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="cards">
                  <img className="cards__img" src={movie.image} />
                  <div className="cards__overlay">
                    <div className="card__title">
                      {movie ? movie.title : ""}
                    </div>
                    <div className="card__runtime">
                      {movie ? movie.year : ""}
                      <span className="card__rating">
                        {movie ? movie.rating : ""}
                        <i className="fas fa-star" />
                      </span>
                    </div>
                    <div className="card__description">
                      {movie ? movie.description.slice(0, 118) + "..." : ""}
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default Cards;
