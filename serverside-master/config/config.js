// check env
const env  = process.env.NODE_ENV || 'development';

// fetching env 

const config = require('../config/config.json');
const envConfig  = config[env];

// add env config values to process.env

 Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);  
