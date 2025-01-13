const express=require('express');
const app= express();
const cors=require('cors')
const port=3000;

app.use(cors());

app.get('/', (req, res) => {
  return res.json({message:"Welcome to Home page"})
}
)


app.listen(port, () => {
  console.log("Server Started at http://localhost:"+port);
}
)