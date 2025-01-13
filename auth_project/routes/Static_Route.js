const express=require('express');
const { handlestatic } = require('../controllers/staticroute');
const shorturl = require('../models/shorturl');
const { restrictto } = require('../middleware/auth');
// const { shorturlpost, shorturlget } = require('../controllers/shorturl');

const router=express.Router();

router.get('/',handlestatic);
router.get('/admin/urls',restrictto(["ADMIN"]), async (req, res) => {
  const allurls=await shorturl.find({});
  return res.render('home',{allshorturl:allurls})
}
)


module.exports=router;