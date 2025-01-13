const express=require('express');
const { handleviews, handlevisithistory } = require('../controllers/analytics');
const analytics_router=express.Router();

analytics_router.get('/:shortid',handleviews);
analytics_router.get('/details/:shortid', handlevisithistory)

module.exports=analytics_router;