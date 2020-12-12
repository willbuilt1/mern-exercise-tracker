const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('DB connected');
});

app.use('/', (req, res) => {
  res.send('Hello');
});

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

app.listen(port, () => {
  console.log(`server on ${port}`);
});
