const AddUser = () => {
  return (
    <form>
      <label htmlFor='username'>Username:</label>
      <input id='username' type='text' />
      <label htmlFor='age'>Age:</label>
      <input id='age' type='number' />
      <button type='submit'>Add User</button>
    </form>
  );
};

export default AddUser;
