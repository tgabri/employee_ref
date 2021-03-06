const express = require('express');
const mongoose = require('mongoose');

const apiRouter = require('./routes/apiRouter.js');

const app = express();

app.use(express.json());

app.use('/api', apiRouter);

//DB Config

const db = require('./config/keys').mongoURI;

//Connect to mongoDB

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
