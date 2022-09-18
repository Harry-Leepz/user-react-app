import Card from "./Card";
import Button from "./Button";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={props.backdrop} onClick={props.onHandleError}></div>;
};

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

const ErrorModal = (props) => {};

export default ErrorModal;
