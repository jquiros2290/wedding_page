var session     = require('express-session');
var User        = require('../models/user.js');
var bcrypt      = require('bcrypt-as-promised')


module.exports = {
    create: (req, res) => {
        console.log(req.body.email);
        User.findOne({ email: req.body.email }, (err, user) => {
            console.log(user);
            if (!user) {
                let error = {message: 'There is no account associated with this email'};

                return res.status(400).json(error);
            }
            bcrypt.compare(req.body.password, user.password)
            .then( () => {
                session.user_id = user._id;
                return res.json(user);
            })
            .catch( () => {
                let error = {message: 'Invalid Password'};
                return res.status(400).json(error);
            });
        });
    },
    find: (req, res) => {
        User.findOne({_id: session.user_id}, (err, user) => {
            if (err) {
                return res.json(err.errors);
            }

            return res.json(user);
        });
    },
    delete: (req, res) => {
        if ('user_id' in session) {
            delete session['user_id'];
            console.log('made it this far')
            return res.json('delete');
        }
        return res.json();
    }
}