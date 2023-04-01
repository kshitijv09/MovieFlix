import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
const MovieList = () => {
  const data = useLoaderData();
  console.log(data.results[0].title);
  return (
    <Fragment>
      <h3>This is a movie page </h3>
      <p>{data.results[0].title}</p>
    </Fragment>
  );
};
export default MovieList;
