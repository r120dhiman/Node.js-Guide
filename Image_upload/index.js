const express=require('express');
const path=require('path');
const fs=require('fs');
const uploadDir = path.join(__dirname, 'uploads');
const multer=require('multer');
const storage=multer.diskStorage({
  destination:function(req, file, cb){
    return cb(null, uploadDir);
  },
  filename:function(req, file, cb){
    return cb(null, `${Date.now()}_${file.originalname}`);
  }
})

const upload=multer({storage:storage});

const app=express();
const port=3001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app. use(express.json());
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
  return res.render('home');
}
)
app.post('/upload' ,upload.single('profileimage'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect('/');
}
)

app.listen(port, () => {
  console.log("Your website is running at http://localhost:"+port);
}
)