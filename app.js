const hbs = require('hbs');
const express = require('express');

let app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

app.locals.engine = 'Mustache.js';
app.locals.title = 'Templating Engines';

app.get('/', (req,res) => {
  res.render('home', {
    foods: [
      'chalupa',
      'ceviche',
      'candy sprinkles'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
