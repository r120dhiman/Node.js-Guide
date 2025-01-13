const mongoose=require('mongoose');

const url=new mongoose.Schema({
shortid:{
    type:String,
    unique:true,
    required:true,
},
redirecturl:{
    type:String,
    required:true
},
viewhistory:[{timestamp:{type:Number}}]
},{timestamps:true})

const URL=mongoose.model('url', url);

module.exports={URL};