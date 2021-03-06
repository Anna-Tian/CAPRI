const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    /*
    From the user take just the id (to minimize the cookie size) and just pass the id of the user
    to the done callback
    PS: You dont have to do it like this its just usually done like this
    */
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    /*
    Instead of user this function usually recives the id 
    then you use the id to select the user from the db and pass the user obj to the done callback
    PS: You can later access this data in any routes in: req.user
    */
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "1056876229882-ok1punn4ip91bhj8llq387aunhorqfka.apps.googleusercontent.com",
    clientSecret: "k5j7QyFWwiXbLJvjRLd3mIJDk5j7QyFWwiXbLJvjRLd3mIJD",
    callbackURL: "https://docs.google.com/forms/d/1e2LfKjg5HTGd5fWhHtwCgvibhmS_ySDBtOxf0JcdlQY/edit"
  },
  function(accessToken, refreshToken, profile, done) {
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
    return done(null, profile);
  }
));