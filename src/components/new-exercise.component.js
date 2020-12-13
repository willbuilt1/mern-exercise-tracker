import React, { useState, useEffect } from 'react';

const NewExercise = () => {
  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
    users: [],
  });

  useEffect(() => {
    setExercise({ ...exercise, users: ['Will', 'Nej'], username: 'Will' });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(exercise);
    // window.location = '/';
  };

  return (
    <div>
      <h1>Log your workout</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={(e) =>
              setExercise({ ...exercise, username: e.target.value })
            }
          >
            {exercise.users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="username">Duration</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            onChange={(e) =>
              setExercise({ ...exercise, duration: e.target.value })
            }
            value={exercise.duration}
          ></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Date: </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewExercise;
