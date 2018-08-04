const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const models = require('./models')

const setupAuth = (app) => {


    app.use(cookieParser());

    app.use(session({
        secret: 'secretCode',
        resave: true,
        saveUninitialized: true
    }));

    passport.use(new GitHubStrategy({
        clientID: "acd16ad9b0a373227613",
        clientSecret: "2cc2cacbe51917364df4108ea212f4a9b9a0e475",
        callbackURL: "https://golf-played-app.herokuapp.com/github/auth"
    }, (accessToken, refreshToken, profile, done) => {
        models.User.findOrCreate({
            where: {
                githubid: profile.id,
                username: profile.username
            }
        })
            .then(result => {
                return done(null, result[0]);
            })
            .catch(err => { // .catch(done);
                done(err);
            })
    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login', passport.authenticate('github'));


    app.get('/logout', function(req, res, next){
        req.logout();
        res.redirect('/');
    });

    app.get('/github/auth',
        passport.authenticate('github', {
            failureRedirect: '/login'
        }),
        (req, res) => {
            res.redirect('/home');
        });
};
// ABOVE IS PROBABLY WHERE WE REDIRECT?!


const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/home');
}
module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;
