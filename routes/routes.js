const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/data', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);


let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));
mdb.once('open', callback => {});

let userSchema = mongoose.Schema({
    username: String,
    password: String,
});

let User = mongoose.model('User_Collection', userSchema);

exports.index = (req, res) => {
        res.render('index', {
            title: 'Home Page',
        });
        console.log(req.cookies);
        console.log(
            "================="
        );
        console.log(req.session);
};

exports.signUp = (req, res) => {
    res.render('signUp', {
        title: 'Sign Up'
    })
}

exports.createUser = (req, res) => {
    let user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    user.save((err, user) => {
        if (err) return console.error(err);
        console.log(req.body.name + ' added');
    });
    res.redirect('/');
};


exports.returnAllUsers = (req, res) => {
    User.find((err, user) => {
        if (err) return console.error(err);
        res.json(user);
    });
};