const express=require('express')
const urlroute=require('./routes/url');
const path=require('path')
const { connectdb } = require('./connections/url');
const analytics_router = require('./routes/analytics');
const {URL}=require('./models/url');
const staticrouter = require('./routes/StaticRouter');
const authrouter=require('./routes/user')

const app=express();
const port=3002;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.set("views", path.resolve("./view"))
connectdb("mongodb://localhost:27017/shorturl").then(() => {
    console.log("Connection done");
    
}
).catch((error) => {
    console.log("there is some error in the connection please check here\n",error);
    
}
)
app.use('/',staticrouter)

app.use('/signup',authrouter)

// app.get('/allusers',async (req,res) => {
//   const alluser= await URL.find({});
//   return res.render('home',{
//     alluser
//   })
// }
// )
// app.get('/allusers/',async  (req, res) => {
//   const alluser= await URL.find({});
//   return res.send(`
//   <html>
//   <head> 
//   </head>
//   <body>
//   <ul>
//   ${alluser.map(user=>`<li> ${user.shortid}=> ${user.redirecturl}  is visited ${user.viewhistory.length} times </li>`).join('')
//   }
//   </ul>
//   </body>
//   </html>`)
// }
app.use('/analytics',analytics_router)
app.use('/url', urlroute)
app.listen(port, () => {
  console.log('The app has started and listening at http://localhost',port);
  
}
)