import { useState, useRef } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";
import ErrorModal from "../Ui/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  // refernces
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  // state
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [error, setError] = useState();

  // prevent page reload on form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+ageInput < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (value greater than 0) ",
      });
      return;
    }

    props.onAddUser(usernameInput, ageInput);
    // reset form input fields on form submission
    setAgeInput("");
    setUsernameInput("");
  };

  const usernameChangeHandler = (event) => {
    setUsernameInput(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeInput(event.target.value);
  };

  const handleError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={handleError}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='username'>Username:</label>
          <input
            id='username'
            type='text'
            value={usernameInput}
            onChange={usernameChangeHandler}
            ref={usernameInputRef}
          />
          <label htmlFor='age'>Age:</label>
          <input
            id='age'
            type='number'
            value={ageInput}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
