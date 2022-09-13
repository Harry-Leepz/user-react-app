import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);

  const onAddUser = (userName, userAge) => {
    setusersList((prevState) => {
      return [
        ...prevState,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
    console.log(usersList);
  };

  return (
    <div className='App'>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
