import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import EditExercise from './components/edit-exercise.component';
import ExerciseList from './components/exercises-list.component';
import NewExercise from './components/new-exercise.component';
import NewUser from './components/new-user.component';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/log" exact component={NewExercise} />
        <Route path="/users/add" exact component={NewUser} />
      </Router>
    </div>
  );
}

export default App;
