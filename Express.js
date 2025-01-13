const express=require('express')
const app=express()


app.get('/', (req,res) => {
  return res.send("Welcome to home page")
}
)
app.get('/about', (req,res) => {
  return res.send("Welcome to About page"+"\nHello "+req.query.name+ "\nHow are you hope you are good")
}
)
app.listen(5173, () => {
  console.log('Server started at port 5173');
  
}
)