const user=require('../models/user')
async function handleusersignup(req, res){
    const {name, email, passcode}=req.body;
    await user.create({
        name:name,
        email:email,
        passcode:passcode
    })
    return res.render("home")
}

async function handleuserlogin(req,res){
    const {email, password}=req.body;
    const targetuser=await user.findOne({email:email, passcode:password})
    if(!targetuser){
        return res.render('login', {
           error:"Invaild username or password"
        })
    };
    return res.render('home')
}
module.exports={handleusersignup, handleuserlogin}