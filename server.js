require('dotenv').config();

const express = require('express');
const request = require('request');
const app = express();

const options = {
  headers: {
    'User-Agent': 'JGNews/1.0'
  }
};

app.get('/', (req, res) => {
  request.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}`, options, (error, response, body) => {
    if (error) {
      res.send(error);
    } else {
      res.send(body);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening in the PORT 3000')
});
