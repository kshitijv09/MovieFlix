import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const movieList = [
  {
    id: "1",
    original_title: "ABC",
    release_date: "1553",
    vote_average: "9.0",
    overview: "Nice",
    genre: "action",
  },
  {
    id: "2",
    original_title: "XYZ",
    release_date: "1234",
    vote_average: "3",
    overview: "Shit",
    genre: "action",
  },
  {
    id: "3",
    original_title: "Hella",
    release_date: "1990",
    vote_average: "6.969",
    overview: "Good",
    genre: "thriller",
  },
  {
    id: "4",
    original_title: "Thor",
    release_date: "2021",
    vote_average: "7.99",
    overview: "Ugly",
    genre: "comedy",
  },
];

const SearchBar = () => {
  const [movieName, setMovieName] = useState("");

  const movieHandler = (event) => {
    setMovieName(event.target.value);
    console.log(event.target.value);
    const mList = movieList.filter((mov) => mov.title === movieName);
    console.log(mList);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const mList = movieList.filter((mov) => mov.title === movieName.title);
  };

  return (
    <form /* onSubmit={submitHandler} */ className="input">
      <TextField
        className="input"
        size="small"
        label="Movie"
        variant="filled"
        color="success"
        focused
        onChange={movieHandler}
        value={movieName}
        inputProps={{
          style: {
            height: "20px",
          },
        }}
        InputLabelProps={{ style: { fontSize: "1.2rem", fontWeight: "1000" } }}
      />
      <Link
        to={`/movies/${
          movieList.filter((mov) => mov.original_title === movieName).genre
        }/${movieList.filter((mov) => mov.original_title === movieName).id}`}
      >
        <Button
          type="submit"
          variant="outlined"
          style={{ padding: "10px" }}
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Link>
    </form>
  );
};
export default SearchBar;
