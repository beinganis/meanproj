

const { parse } = require('querystring');
const mongoose = require('mongoose');
const passport = require('passport');
require('./../models/users.js');
const User = mongoose.model('User');


module.exports.register = (req, res, next) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            req.body = result;
            var user = new User();
            user.name = req.body.name;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.password = req.body.password;
            user.userStatus = req.body.userStatus;
            user.save((err, doc) => {
                if (!err)
                    res.send(doc);
                else {
                    if (err.code == 11000)
                        res.status(422).send(['Duplicate email address found']);
                    else
                        return next(err);
                }
            });
        });
    }
}

module.exports.authenticate = (req, res, next) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            req.body = result;
            const user = req.body;
            if (!user.email) {
                return res.status(422).json({
                    errors: {
                        email: 'is required',
                    },
                });
            }
            if (!user.password) {
                return res.status(422).json({
                    errors: {
                        password: 'is required',
                    },
                });
            }
            // call for passport authentication
            passport.authenticate('local', (err, user, info) => {
                if (err) return res.status(400).json(err);
                // registered user
                else if (user) 
                return res.status(200).json({
                     "token": user.generateJwt(),
                     "userType" : user.userStatus 
                    });
                // unknown user or wrong password 
                else return res.status(404).json(info);
            })(req, res);
        });
    }
}

module.exports.userProfile = (req, res, next) => { }

function collectRequestData(request, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        callback(JSON.parse(body));
    });
}
