import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Modal.module.css";
import Login from "../../Home/Login";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = () => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <Login />
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClick={props.onConfirm} />
      <ModalOverlay />
    </Fragment>
  );
};

export default Modal;
