const User=require('../Models/user')

async function handlealluser(req,res){
    const allusers=await User.find({});
    console.log(allusers)
    const pagecontent=`<ul>
    ${allusers.map((user) => {
      return `<li> ${user.first_name} &nbsp ${user.last_name} </li>`
    }
    ).join("")}
    </ul>
    `;
    console.log(pagecontent)
    return res.send(pagecontent);
}

async function handlenewuser(req,res){
        const body=req.body;
        const newuser=await User.create({
          first_name:body.first_name,
          last_name:body.last_name,
          email:body.email,
          job_title:body.job_title,
          gender:body.gender
        })
        console.log(newuser)
        return res.send('Form data received');
      }
    
async function oneuserhandle(req,res){
    const id = req.params.id;
    
    const user = await User.findById(id);
  
    if (user) {
      return res.json(user);  // Respond with the user object if found
    } else {
      return res.status(404).send("Sorry, no such user is found in the database. Please check the ID again.");
    }
  }


async function userupdate(req,res)  {
    await User.findByIdAndUpdate(req.params.id,{job_title:req.body.job_title})
    const updateddetails=await User.findById(req.params.id)
    return res.json(updateddetails)
  }
module.exports={handlealluser, handlenewuser,oneuserhandle,userupdate
}