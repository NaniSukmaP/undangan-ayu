const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000

app.get('/', (req, res) => {
  res.render('depan');
});

app.get('/undangan', (req, res) => {
  res.render('undangan');
});

app.get('/:namaTamu', (req, res) => {
  const nama = req.params.namaTamu;
  console.log(nama);
  res.render('depan' , {tamuAyu : nama});
});

app.post('/', (req, res) => {
//   var num1= Number(req.body.num1);
//   var num2= Number(req.body.num2);
//   var result = num1+num2;
//   res.send("The result is " + result);
});
 
app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
});