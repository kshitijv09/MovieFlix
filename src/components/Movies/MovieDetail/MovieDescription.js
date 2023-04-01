import { useParams } from "react-router-dom";
import "./MovieDescription.css";
import { useRouteLoaderData } from "react-router-dom";
import { Button } from "@mui/material";
import Cards from "../../UI/Card/Card";

const MovieDescription = () => {
  const params = useParams();
  const movieList = useRouteLoaderData("movies");
  const mdetail = movieList.filter((mov) => mov.title === params.movieName);
  const movie = mdetail[0];

  return (
    <div className="page-container">
      <div className="content">
        <div className="details-section">
          <div className="details-container">
            <div>
              <h1 style={{ color: "#dd0c16" }}> {movie && movie.title}</h1>
            </div>
            <div className="movie-stats">
              <div>{movie && movie.year} </div>
              <div> | </div>
              <div>{movie && movie.rating}</div>
            </div>
            <div className="movie__genres">
              {movie && movie.genre
                ? movie.genre.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre}>
                        {genre}
                      </span>
                    </>
                  ))
                : ""}
            </div>
            <div>
              <p> {movie.description} </p>
            </div>
            <div className="play-movie">
              <a href={movie.trailer} target="_blank">
                <Button
                  variant="contained"
                  className="play-button"
                  style={{ backgroundColor: "#dd0c16" }}
                >
                  Play
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="image-section">
          <img src={movie.image} alt="movie" className="movie-image" />
        </div>
      </div>
      <Cards mov={movieList.filter((mov) => mov.genre[0] === movie.genre[0])} />
      <div className="extra_details"></div>
    </div>
  );
};
export default MovieDescription;
