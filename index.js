const express = require('express');
const routes = require('./routes/routes');
const pug = require('pug');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const passport = require('passport');
const flash = require('connect-flash');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, './public')));

app.use(passport.initialize());
app.use(passport.session());

let urlencodedParser = bodyParser.urlencoded({
    extended: true
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json({
    type: ['application/json', 'text/plain']
  }))






app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'anystringoftext',
                saveUninitialized: true,
                resave: true}))








//-------------- ROUTES ----------------
app.get('/', routes.index);
app.get('/signUp', routes.signUp);
app.post('/signUp', urlencodedParser, routes.createUser);
app.get('/signIn', routes.signIn);
app.get('/myWalkthroughs', routes.myWalkthroughs);
app.post('/myWalkthroughs', urlencodedParser, routes.createWalk);
app.get('/topWalkthroughs', routes.topWalkthroughs);
app.get('/gameList', routes.gameList);
app.get('/searchUsers', routes.searchUsers);
app.get('/getAllUsers', routes.returnAllUsers);


app.get('/newWalk', routes.newWalk);




app.listen(3001);
