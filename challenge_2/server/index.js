const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3003;
const fetch = require('node-fetch');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/current', (req, res) => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => { console.log(error); });
});

app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}~!?`);
});