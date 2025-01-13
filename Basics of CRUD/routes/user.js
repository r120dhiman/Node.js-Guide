const express=require('express');
const { handlealluser, handlenewuser, oneuserhandle, userupdate } = require('../Controller/user');
const router=express.Router();

  router.route('/').get(handlealluser)
  .post( handlenewuser);

  router.route('/:id').get(oneuserhandle)
  .patch(userupdate)

  module.exports=router
  