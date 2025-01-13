const { getuser } = require("../service/auth");

function checkForAuthentication(req, res, next){
    const userUID=req.cookies.uid;
    req.user=null
    if(!userUID) return next();

    const user=getuser(userUID)
    req.user=user;
    return next();
}

function restrictto(roles=[]){
    
    return function(req, res,next){
        const userUID=req.cookies.uid;
    const user=getuser(userUID)
        if(!user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.end("This route is not for you")

            return next()
    }
}
// async function restricttologgedinuser(req, res, next){
//     const userUID=req.cookies.uid;
//     if(!userUID) return res.redirect('/login');
//     const user=getuser(userUID);
//     if(!user) return res.redirect('/login')
//         req.user=user;
//     next();
// }

// async function checkAuth(req, res, next){
//     const userUID=req.cookies.uid;
//     const user=getuser(userUID);
//         req.user=user;
//     next();
// }

module.exports={
    checkForAuthentication, restrictto
}