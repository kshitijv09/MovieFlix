import MovieCarousel from "../UI/Carousel/Carousel";

import Cards from "../UI/Card/Card";
import { useRouteLoaderData } from "react-router-dom";

const Action = () => {
  const movieList = useRouteLoaderData("movies");
  const mList = movieList.filter((mov) => mov.genre[0] === "Action");
  return (
    <div
      className="page-container"
      style={{ minHeight: "100vh", backgroundColor: "#030b16" }}
    >
      <MovieCarousel movies={mList} />
      <Cards mov={mList} />
      <h1> This is Action</h1>
    </div>
  );
};
export default Action;
