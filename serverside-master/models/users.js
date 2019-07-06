const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: 'Name can\'t empty'
    },
    lastname: {
        type:String,
        required: 'lastname can\'t be empty'
    },
    email: {
        type:String,
        required: 'Email can\'t be empty',
        unique:true
    },
    password:{
        type:String,
        required: 'Password can\'t be empty',
        minlength: [6,'password must be atleast 6 character length']

    },
    userStatus:{
        type: Boolean, 
        required: 'Please Select Student or  Professor '
    },

    saltSecret:String
});

// mongoose.model('User',userSchema,'professors');
 
//pre events
 
userSchema.pre('save',function (next){
bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(this.password, salt, (err, hash)=>{
        this.password = hash;
        this.saltSecret = salt;
        next();
    });
  });
});

// Custom validation for Email

userSchema.path('email').validate((val)=> {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val);
});

// methods


userSchema.methods.verifyPassword = function (password){
    return bcrypt.compareSync(password, this.password); 
}


userSchema.methods.generateJwt = function (){
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET);
}


mongoose.model('User',userSchema,'users');