const {URL}=require('../models/url')

async function handleviews(req,res){
    const shortid=req.params.shortid;
    const webpage= await URL.findOne({shortid});
    const views=webpage.viewhistory.length;
    return res.json(views)
}

async function handlevisithistory(req, res ){
    const shortid=req.params.shortid;
    const webpage= await URL.findOne({shortid});
    const views=webpage.viewhistory;
    return res.json(views)
}

module.exports={handleviews,handlevisithistory}
