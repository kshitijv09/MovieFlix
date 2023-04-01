import MovieCarousel from "../UI/Carousel/Carousel";
import Cards from "../UI/Card/Card";
import { useRouteLoaderData } from "react-router-dom";

const Crime = () => {
  const movieList = useRouteLoaderData("movies");
  const mList = movieList.filter((mov) => mov.genre[0] === "Crime");

  return (
    <div
      className="page-container"
      style={{ minHeight: "100vh", backgroundColor: "#030b16" }}
    >
      <MovieCarousel movies={mList} />
      <Cards mov={mList} />
    </div>
  );
};
export default Crime;
