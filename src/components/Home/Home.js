import { Fragment, useState } from "react";
import netflix from "../../assets/netflix-bkg.jpg";
import { Button } from "@mui/material";
import Modal from "../UI/Modal/Modal";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isModal, setModal] = useState(false);
  const navigate = useNavigate();

  const modalHandler = () => {
    setModal((prevValue) => {
      return !prevValue;
    });
    console.log(isModal);
    navigate("/login");
  };
  return (
    <Fragment>
      {isModal && <Modal onConfirm={modalHandler} />}
      <div
        className={classes.homepage}
        style={{
          backgroundImage: `url(${netflix})`,
        }}
      >
        <div className={classes.header}>
          <div className={classes.logo}>
            <h1 className={classes.logo_name}>NETFLIX</h1>
          </div>
          <div className={classes.btn_container}>
            <Button
              variant="contained"
              onClick={modalHandler}
              style={{ backgroundColor: "red" }}
            >
              SIGN IN
            </Button>
          </div>
        </div>
        <main>
          <div className={classes.content}>
            <h1 className={classes.homepage_content}>
              Unlimited movies, TV <br />
              shows and more.
            </h1>
            <h2> Watch anywhere. Cancel anytime.</h2>
          </div>
        </main>
      </div>
    </Fragment>
  );
};
export default Home;
