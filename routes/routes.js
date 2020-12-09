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
// -------------SCHEMAS -----------
let userSchema = mongoose.Schema({
    username: String,
    password: String,
});

let User = mongoose.model('User_Collection', userSchema);

let walkthroughSchema = mongoose.Schema({
    htmlText: String,
    views: Number,
    game: String,
    title: String
});

let Walkthrough = mongoose.model('Walkthrough_Collection', walkthroughSchema)

// ------------EXPORTS -----------------
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
    //User Exports
exports.signUp = (req, res) => {
    res.render('signUp', {
        title: 'Sign Up'
    })
}

exports.signIn = (req, res) => {
    res.render('signIn', {
        title: 'Sign In'
    })
}

exports.myWalkthroughs = (req, res) => {
    
    res.render('myWalkthroughs', {
        title: 'My Walkthroughs'
    })
}

exports.topWalkthroughs = (req, res) => {
    res.render('topWalkthroughs', {
        title: 'Top Walkthroughs'
    })
}

exports.gameList = (req, res) => {
    res.render('gameList', {
        title: 'Game List'
    })
}

exports.searchUsers = (req, res) => {
    res.render('searchUsers', {
        title: 'Search Users'
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


//----------Walkthrough Exports

exports.newWalk = (req, res) => {
    
    
    res.render('newWalkthrough', {
        title:'New Walkthrough'
    });
}
exports.createWalk =(req,res) =>{
    const walkthrough ={
        Title: req.body.Wname,
        GameW: req.body.Game,
        Box: req.body.Contentbox
    }
    walkthrough.save((err, WT) => {
        if (err) return console.error(err);
        console.log(req.body.name + ' added');
    });
    res.redirect('/walkthrough')
}