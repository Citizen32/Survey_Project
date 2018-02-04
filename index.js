const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

// THIS CONST SPECIFIES WHERE OUR APPLICATION IS RUNNING, EITHER HEROKU'S ENVIROMENT (PRODUCTION) PORT OR LOCAL HOST (DEVELOPMENT) 
const PORT = process.env.PORT || 8080;

app.listen(PORT);