import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import express from 'express';

const app = express();

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }
));

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

export default app;