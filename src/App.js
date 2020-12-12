import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import EditExercise from './components/edit-exercise.component';
import ExerciseList from './components/exercises-list.component';
import NewExercise from './components/new-user.component';
import NewUser from './components/new-user.component';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExerciseList} />
    </Router>
  );
}

export default App;
