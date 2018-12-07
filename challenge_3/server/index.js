const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log(`listening on PORT ${PORT}~!?`);
});

