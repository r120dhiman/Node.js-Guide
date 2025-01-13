const {nanoid}=require('nanoid')
const {URL}=require('../models/url')

async function shorturl(req, res){
const body=req.body;
if(!body.redirecturl){
    return res.status(400).json({error:"Url is required"})
}
const shortid=nanoid(8);
await URL.create({
    shortid:shortid,
    redirecturl:body.redirecturl,
    visithistory:[]
})
return res.render('home', {id:shortid})
}

async function redirectwebpage(req,res)  {
    const shortid=req.params.shortid;
    const entry=await URL.findOneAndUpdate({
      shortid
    },{$push:{
      viewhistory:{timestamp:Date.now()},
    }})
    return res.redirect(entry.redirecturl)
  }

module.exports={shorturl, redirectwebpage}