import { useState } from "react";
import Button from "../Ui/Button";
import Card from "../Ui/Card";

import styles from "./AddUser.module.css";

const AddUser = () => {
  // state
  const [usernameInput, setUsernameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  // prevent page reload on form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Username is", usernameInput);
    console.log("Age is", ageInput);
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
        <input id='username' type='text' onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age:</label>
        <input id='age' type='number' onChange={ageChangeHandler} />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
