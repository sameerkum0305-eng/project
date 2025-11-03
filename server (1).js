const express = require('express')

cost app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  console.log('Here');
  res.render("index",
  {user: "George!",});
});
app.get('/users', (req, res)=> {
  res.send('New User Form');
});


app.listen(3030);