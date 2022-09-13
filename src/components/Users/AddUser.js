import { useState } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  // state
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  // prevent page reload on form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (usernameInput.trim().length === 0 || ageInput.trim().length === 0) {
      return;
    }

    if (+ageInput < 1) {
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

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          value={usernameInput}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='age'>Age:</label>
        <input
          id='age'
          type='number'
          value={ageInput}
          onChange={ageChangeHandler}
        />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
