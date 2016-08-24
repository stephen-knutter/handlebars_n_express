const express = require('express');

let app = express();

app.get('/', (req,res) => {
  res.json({message: 'Hello from express!'})
});

app.get('/page2', (req, res) => {
  res.json({message: 'Hello from page 2'});
})

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
