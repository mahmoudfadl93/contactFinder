const express = require('express');
const router = express.Router();


// @route     Get api/auth
// @desc      Get Logged in user
// @access    Private
router.get('/' , (req,res)=>{
    res.send('Get Logged in user')
});


// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post('/' , (req,res)=>{
    res.send('login user')
});

module.exports = router;