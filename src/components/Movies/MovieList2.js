import { useRouteLoaderData } from "react-router-dom";
import MovieCarousel from "../UI/Carousel/Carousel";
import Cards from "../UI/Card/Card";
import axios from "axios";

const APIKey = process.env.REACT_APP_API_KEY;

const MovieList = () => {
  const movieList = useRouteLoaderData("movies");

  return (
    <div
      className="page-container"
      style={{ minHeight: "100vh", backgroundColor: "#030b16" }}
    >
      <MovieCarousel movies={movieList} />
      <Cards mov={movieList} />
    </div>
  );
};
export default MovieList;

export async function loader() {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": `${APIKey}`,
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  if (!response.ok) {
    return response.data;
  } else {
    console.log(response.status);
  }
}
