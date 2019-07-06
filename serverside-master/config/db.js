const mongoose = require('mongoose');

secrect='mysecret';
// to avoid DeprecationWarning: collection.ensureIndex is deprecated.
// Use createIndexes instead.
mongoose.set('useCreateIndex', true);
 
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true },(err)=>{
    if(!err) {console.log('Mongodb connection succeeded');
              }
    else
    {console.log('Error in Mongodb connection :'+ JSON.stringify(err,undefined,2));
     }
}); 

require('../models/users');      