import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import express from 'express';

const app = express();

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    done(null, profile);
  }
));

app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

export default app;