import { Link, NavLink } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <div className={classes.container}>
      <h1 style={{ color: "white", paddingLeft: "0.7em", fontSize: "2.5rem" }}>
        Sign In
      </h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Email or phone number"
          variant="filled"
          style={{
            backgroundColor: "#333333",
            width: "85%",
            borderRadius: "0.5em",
          }}
          InputLabelProps={{ style: { color: "#868887" } }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="filled"
          style={{
            width: "85%",
            backgroundColor: "#333333",
            borderRadius: "0.5em",
          }}
          InputLabelProps={{ style: { color: "#868887" } }}
        />
      </div>
      <div>
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            style={{
              marginTop: "1.4em",
              padding: "1em 0",
              backgroundColor: "red",
              color: "white",
              width: "83%",
              fontSize: "1rem",
            }}
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Login;
