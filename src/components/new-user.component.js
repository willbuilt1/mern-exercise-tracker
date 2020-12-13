import React, { useState } from 'react';

const NewUser = () => {
  const [username, setUsername] = useState('');

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = { username };
    console.log(user);
    setUsername('');
  };

  return (
    <div>
      <h1>Add a User</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={onUsernameChange}
            value={username}
          ></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewUser;
