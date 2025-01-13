const express=require('express');
const { handleusersignup, handleuserlogin } = require('../controllers/user');
const authrouter=express.Router();

authrouter.post('/', handleusersignup)
authrouter.get('/login', (req,res) => {
  return res.render('login')
}
)
authrouter.post('/login',handleuserlogin)
module.exports=authrouter