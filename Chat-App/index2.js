const express=require('express');
const http=require('http');
const path=require('path');
const {Server}=require("socket.io");
const PORT=5001;

const app=express();
app.use(express.static(path.resolve('./Public')));
const server=http.createServer(app);
const io=new Server(server);
let connection=false;
//Socket.io
io.on("connection", (socket)    => {
  connection=true;
  console.log("NEW USEer connected " + socket.id);
  socket.on('disconnect', () => {
    connection=false;
    console.log('user disconnected');
  });

  socket.on("user_message", (msg) => {
io.emit("message", msg);
  }
  )
}
)

app.get('/', (req, res ) => {
  return res.sendFile('/Public/index.html',{connection:connection});
}
)

server.listen(PORT, () => {
  console.log("Application is listening on http://localhost:"+PORT);}
)