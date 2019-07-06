require('./config/config');
require('./config/db');
require('./config/passport');
const { parse } = require('querystring');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const routerIndex = require('./routes/index');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 
app.use('/api',routerIndex);

//middleware
app.use(cors()); 
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
  
  app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

//static folders

// error handlers 

app.use((err,req,res,next)=>{
    if(err.name = 'ValidationError')
    {
        var valErrors = [];
        if(err.errors)
            Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message)); 
        else
            valErrors.push(err.message);

        res.status(422).send(err.errors);
    }
});

//start server 

app.listen(process.env.PORT,()=>
     console.log(`server started at port : ${process.env.PORT}`));


