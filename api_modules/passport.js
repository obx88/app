const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const passport = require('passport');
const ValidationError = require('./validationError');
const dbQuery = require('./dbQuery');
require('dotenv').config();

// const callbackURL =
//   process.env.NODE_ENV === 'production'
//     ? 'http://www.ingoodatmosphere.com/logowanie'
//     : 'http://localhost:3000/api/signIn/facebook';
// const clientID =
//   process.env.NODE_ENV === 'production'
//     ? process.env.FB_APP_ID
//     : '632567057597727';
// const clientSecret =
//   process.env.NODE_ENV === 'production'
//     ? process.env.FB_APP_SECRET
//     : '80c7d46012dcdfaba3f31354dcd94154';

// export const facebook = new FacebookStrategy(
//   {
//     clientID,
//     clientSecret,
//     callbackURL,
//   },
//   (accessToken, refreshToken, profile, cb) => {
//     console.log(profile);
//     return cb(null, profile);
//   },
// );
export default new LocalStrategy(
  { usernameField: 'email' },
  async (username, password, done) => {
    const user = await dbQuery
      .findUser(username, (err) => {
        if (err) return done(err, false);
        return null;
      })
      .catch((err) => {
        return done(err, false);
      });
    if (!user || username === '' || user.email === '') {
      return done(
        null,
        new ValidationError(
          'Nie znaleziono użytkownika o podanym adresie email',
          'email',
        ),
      );
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.log(err);
        return done(err, false);
      }
      if (!isMatch || password === '' || user.password === '') {
        return done(null, new ValidationError('Złe hasło', 'password'));
      }
      return done(null, user);
    });
    return null;
  },
);
