import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

// Component to be portaled in the DOM
const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHandleError}></div>;
};

// Component to be portaled in the DOM
const ModalOverlay = (props) => {
  return (
    <>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

// CreatePortal method is used to move the components out of the root
// and into the specified element by iDs.
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHandleError={props.onHandleError} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onHandleError={props.onHandleError}
        />,
        document.getElementById("errormodal-root")
      )}
    </>
  );
};

export default ErrorModal;
