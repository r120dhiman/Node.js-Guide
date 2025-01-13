const express=require('express');
const { shorturl, redirectwebpage, } = require('../controllers/url');
const router=express.Router();


router.post('/', shorturl)
router.get('/:shortid',redirectwebpage)

module.exports=router