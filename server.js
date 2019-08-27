const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('|| MONGO CONNECTED ||'))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => res.send('this is node running'));


app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

// port or local 5000
const port = process.env.PORT || 5000;

console.log(port);



app.listen(port, () => console.log(`Server running on port ${port}`));
