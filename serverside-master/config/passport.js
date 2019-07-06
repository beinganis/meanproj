const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
require('./../models/users.js')
var User  = mongoose.model('User');

passport.use(
    new localStrategy({usernameField: 'email'},
    (username, password, done)=>{
        User.findOne({email: username},
            (err, user)=>{
                if(err)
                    return done(err);
                    // unknown user 
                else if(!user)
                    return done(null, false, {message:'Email is not registered'});
                    // wrong password 
                else if (!user.verifyPassword(password))
                    return done(null, false, {message:'wrong password'});                
                else
                     return done(null, user); 
            });
    })
);






/*

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const config = require('../config/db');
const config = require('../config/config');

module.exports = function(passport){
    let opts = {};
    opts.jwtFormRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey  = db.secrect;
    passport.use(new JwtStrategy(opts,(jwt_payload, done)=>{
        
    }))
    
}
*/

/*
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var User  = mongoose.model('User');
module.exports = function(passport){

    passport.use(new LocalStrategy(
        function(email, password, done) {

            let query = {email:email};
            User.findOne(query, function (err, user){
                if(err) throw err;
                if(!user){
                    return done(null,false,{message:'No user found'});
                }
                bcrypt.compare(password,user.password,function(err,isMatch){
                    if(err) throw err; 
                    if(isMatch){
                        return done(null,user);
                    } else {
                        return done(null,false,{message:'wrong password  '});
                    }

                });

                });

            }));

            passport.serializeUser(function(user, done) {
                    done(null, user.id); 
                // where is this user.id going? Are we supposed to access this anywhere?
                });
                
                // used to deserialize the user
                passport.deserializeUser(function(id, done) {
                    User.findById(id, function(err, user) {
                        done(err, user);
                    });
                });

        }  */