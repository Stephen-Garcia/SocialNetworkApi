const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost:27017/socialNetworkAPI')
    .then(async () => {
        console.log('Successfully Connected to MongoDB');
    })
    .catch(err => console.log(err));

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server is running on port: ${PORT}!`);
    });
  });