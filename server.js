const express = require ('express');
const app = express();
const router = require('./config/route')
const ejs = require ('ejs');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


app.use(express.urlencoded({extended: true}));

//require mongoose
require('./config/mongoose');

//require router
app.use(router);
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});












