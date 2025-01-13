const express = require('express');
const useRouter=require('./routes/user')
const app = express();
const port = 3005;
app.use(express.urlencoded({ extended: false }));
const {connectionMongoDb}=require('./Connections/conenctions')
connectionMongoDb('mongodb://localhost:27017/newdb').then(console.log('Database conenction done')
)

app.get('/',(req,res) => {
  return res.send("Welcome to the website")
}
)
app.use('/users/',useRouter)


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
