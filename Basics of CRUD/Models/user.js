const mongoose=require('mongoose')
const userschema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String,
     },
     email:{
      type:String,
      unique:true,
     },
     job_title:{
      type:String,
     },
     gender:{
      type:String,
     }
  }, {timestamps:true});
  
  const User = mongoose.model('User', userschema);

module.exports=User