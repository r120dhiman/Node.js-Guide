const express=require('express');
const {URL}=require('../models/url')
const staticrouter=express.Router();

staticrouter.get('/',async(req,res) => {
  const alluser=await URL.find({});
  return res.render('home',{alluser:alluser})
}
)

staticrouter.get('/signup/', (req, res) => {
  return res.render('signup')
}
)
module.exports=staticrouter