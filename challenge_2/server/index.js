const express = require('express');
const app = express();
const PORT = 3003;
const fetch = require('node-fetch');

app.use(express.static('public'));

app.get('/current', (req, res) => {
  fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-11-24&end=2017-12-01')
    .then(response => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => { console.log(error); });
});

app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}~!?`);
});