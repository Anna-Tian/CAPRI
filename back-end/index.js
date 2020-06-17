const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
require('./passport-setup');

const { genPassword } = require('./utils/crypto.js')
const mysql = require('mysql');
const sendEmail=require('./sendEmail.js');

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// // For an actual app you should configure this with an experation time, better keys, proxy and secure
// app.use(cookieSession({
//     name: 'tuto-session',
//     keys: ['key1', 'key2']
//   }))

// // Auth middleware that checks if the user is logged in
// const isLoggedIn = (req, res, next) => {
//     if (req.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// }

// // Initializes passport and passport sessions
// app.use(passport.initialize());
// app.use(passport.session());

// // Example protected and unprotected routes
// app.get('/', (req, res) => res.send('Example Home page!'))
// app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// // In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// // Auth Routes
// app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/good');
//   }
// );

// app.get('/logout', (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })
//Google login verification are above, below are other functions.

//Datebase config
const db = mysql.createConnection({
    host: '119.28.185.254',
    user: 'root',
    password: 'sdscapri1',
    port: 63839,
    database: 'capri'
})
//Connect database
db.connect((err) => {
    if (err) throw err;
    console.log('Database connected!')
})

//var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({ extended: true }) ); // to support URL-encoded bodies
//app.use(bodyParser());
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//login
app.post('/login', urlencodedParser, function (req, res) {
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    
    //console.log("username: " + username + ", password: " + password);

    username = genPassword(username);
    password = genPassword(password);

    const usr = "8a8eb33692f17107552ad26d82032cb8"; //admin
    const pwd = "5a0fca2fc6ebe7065ff739aec0b625d3"; //adminCapri

    if(usr == username && pwd == password){
        res.send({'flag' : true});
    }else{
        res.send({'flag' : false});
    }
 });

app.post('/sendEmail', urlencodedParser, function(req, res) {
    console.log(req.body);
    var name = "<p>Name: " + req.body.data.name + "</p>";
    var email = "<p>Email: " + req.body.data.email + "</p>";
    var suggestion = "<p>Suggestion: " + req.body.data.suggestion + "</p>";
    var content = name + email + suggestion;
    sendEmail.send("Capri suggestions", content);
})

 app.get('/getClinicalManagement', function(req, res) {
    var sql = 'SELECT * FROM clinical_management';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getInterventionFrequency', function(req, res) {
    var sql = 'SELECT * FROM intervention_frequency';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getPhysiotherapyPractitioner', function(req, res) {
    var sql = 'SELECT * FROM physiotherapy_practitioner';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getPracticeCharacteristics', function(req, res) {
    var sql = 'SELECT * FROM practice_characteristics';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getSupplementaryAdvice', function(req, res) {
    var sql = 'SELECT * FROM supplementary_advice';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getTreatPatientsConditionFrequency', function(req, res) {
    var sql = 'SELECT * FROM treat_patients_condition_frequency';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

app.get('/getTreatPatientsSubgroupFrequency', function(req, res) {
    var sql = 'SELECT * FROM treat_patients_subgroup_frequency';
    db.query(sql, function (err,result) {
        if(err){
            console.log('[SELECT ERROR]:',err.message);
        }
        res.send(JSON.stringify(result));
    });
});

var server = app.listen(5000, function () {
 
    var host = server.address().address;
    var port = server.address().port;
   
    console.log("Server on http://%s:%s", host, port);
   
  });