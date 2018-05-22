var session     = require('express-session');
var User        = require('../models/user.js');
var bcrypt      = require('bcrypt')


module.exports = {
    create: (req, res) => {
        console.log(req.body.email);
        User.findOne({ email: req.body.email }, (err, user) => {
            console.log(user);
            if (!user) {
                let error = {message: 'There is no account associated with this email'};

                return res.status(400).json(error);
            }

            bcrypt.compare(req.body.password, user.password, function(err, response) {
                if(response){

                    req.session.user_id = user._id;
                    return res.json(user);
                }else{
                    let error = {message: 'Invalid Password'};
                    return res.status(400).json(error);
                }
            });
        });
    },
    find: (req, res) => {
        User.findOne({_id: req.session.user_id}, (err, user) => {
            if (err) {
                return res.json(err.errors);
            }

            return res.json(user);
        });
    },
    delete: (req, res) => {
        if ('user_id' in req.session) {
            delete req.session['user_id'];
            console.log('made it this far')
            return res.json('delete');
        }
        return res.json();
    }
}