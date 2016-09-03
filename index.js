var express = require('express'),
app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('landing');
});

app.listen(8080, function () {
  console.log('Server listening on port 8080!');
});
