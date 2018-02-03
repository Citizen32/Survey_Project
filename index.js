const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')


const app = express();


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret
    })
);


// THIS CONST SPECIFIES WHERE OUR APPLICATION IS RUNNING, EITHER HEROKU'S ENVIROMENT (PRODUCTION) PORT OR LOCAL HOST (DEVELOPMENT) 
const PORT = process.env.PORT || 8080;

app.listen(PORT);
