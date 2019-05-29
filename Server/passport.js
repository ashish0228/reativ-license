const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usermodel = require('./models/user.model');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'secret'
    }
));

passport.use(new LocalStrategy({
    username: 'email',
    password: 'password'
}, (email, password, cb) => {
    return usermodel.findOne({email, password}).then(user => {
        if(!user) {
            return cb(null, false, {message: 'Incorrect Email or password'});
        }
        return cb(null, user, {message: 'Logged In Successfully'});
    }).catch(err => cb(err));
    }
));
