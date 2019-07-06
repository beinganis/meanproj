const express = require('express');
const router = express.Router(); 
passport = require('passport');
require('../config/passport');

const ctrlUser = require('../controller/user.controller');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
//router.get('/userProfile', ctrlUser.userProfile);


module.exports = router; 