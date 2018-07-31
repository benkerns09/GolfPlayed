const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const models = require('./models');

const setupAuth = (app) => {


    app.use(cookieParser());

    app.use(session({
        secret: 'secretCode',
        resave: true,
        saveUninitialized: true
    }));
    passport.use(new LocalStrategy(
        function(username, password, done) {
          User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
          });
        }
      ));


   

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
        done(null, id);
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login', passport.authenticate('local'));


    app.get('/logout', function(req, res, next){
        req.logout();
        res.redirect('/');
    });

    app.get('/local/auth',
        passport.authenticate('local', {
            failureRedirect: '/login'
        }),
        (req, res) => {
            res.redirect('/home');
        });
};

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/home');
}
module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;
