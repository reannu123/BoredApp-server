const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();
const passport = require("passport");
const UserDAO = require("../dao/UserDAO");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

const authenticateUser = (jwt_payload, done) => {
  UserDAO.getUsers(jwt_payload.username).then((user) => {
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
};

passport.use(new JwtStrategy(options, authenticateUser));
