const express = require('express');
const router = express.Router('router');
const userController = require('../controller/userController');
const logController = require('../controller/logController');
// const thoughtController = require('../controller/thoughtController');
const aboutController = require('../controller/aboutController');
require('dotenv').config();


router.get('/', (req, res)=>{
    res.status(200).json({
        message: 'Server is up!'
    });
});


router.post('/userExists'       , userController.userExists);  //username exists or not
router.get ('/verify/:authToken', userController.verifyToken);  // verify the auth token
router.post('/signup'           , userController.signup);
router.post('/login'            , userController.login);
router.get ('/displayLogs/:username'      , logController.displayLogs);
router.post('/createLog'        , logController.createLog); //done - handled if no user is matched, if no new loglength is 0
// router.post('/setThought'       , thoughtController.setThought);
// router.get ('/thought/:username'          , thoughtController.allThought); //dont upload on github, done - handled if no user is matched
router.post('/setAbout'         , aboutController.setAbout);
router.get ('/about'            , aboutController.about); //dont upload on github
router.get ('/user/:username'    , userController.getUserDetails);
router.post('/logView'           , logController.logView); 
router.get ('/todaysLogs'        , logController.todaysLogs);     

module.exports = router;