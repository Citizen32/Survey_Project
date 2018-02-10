const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');



mongoose.connect('keys.mongoURI');

const app = express();

require('./routes/authRoutes')(app);

// THIS CONST SPECIFIES WHERE OUR APPLICATION IS RUNNING, EITHER HEROKU'S ENVIROMENT (PRODUCTION) PORT OR LOCAL HOST (DEVELOPMENT) 
const PORT = process.env.PORT || 8080;

app.listen(PORT);
