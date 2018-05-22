var session = require('express-session');
var User = require('../models/user.js');


module.exports = {
    index: (req, res) => {
      res.render("index", {errors: req.flash('errors')});
    },
    show: (req, res) => {
        User.findOne({ _id: req.params.id }, (err, user) => {
            if (err) {
                console.log(err.message);
            }
            return res.render('users_show', { user: user })
        });
    },
    create: (req, res) => {
      let user = new User(req.body);

      user.save((err) => {
        if(err){
          let error = err;
          console.log(err);
          return res.status(400).json(error);
        } 
        req.session.user_id = user._id;
        return res.json(user);
      })
    }
  }
