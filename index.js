const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

// TEST ROUTE ==============
// app.get('/', (req, res) => {
//     res.send({
//         bye: 'Hello World!'
//     });
// });

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile); 
    })
);

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get(
    '/auth/google/callback/',
    passport.authenticate('google')
);

// THIS CONST SPECIFIES WHERE OUR APPLICATION IS RUNNING, EITHER HEROKU'S ENVIROMENT (PRODUCTION) PORT OR LOCAL HOST (DEVELOPMENT) 
const PORT = process.env.PORT || 8080;

app.listen(PORT);