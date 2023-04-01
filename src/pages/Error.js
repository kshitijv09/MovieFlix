import React from "react";
import error from "../assets/ErrorEle.jpg";
import { Button, colors } from "@mui/material";
import { Link } from "react-router-dom";
import "./Error.css";
export default function Error() {
  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${error})` }}
    >
      <div className="error-container">
        <h1 style={{ fontSize: "3rem", color: "goldenrod" }}>Lost your Way?</h1>
        <br />
        <p>
          Sorry we can't find your page. You can find loads to explore at the
          Home Page
        </p>
        <Link to="movies">
          <Button
            variant="contained"
            className="play-button"
            style={{ backgroundColor: "#dd0c16" }}
            sx={{ width: 200, height: 50 }}
          >
            HomePage
          </Button>
        </Link>
      </div>
    </div>
  );
}
