// const { create } = require('domain');
const express=require('express');
const status=require('express-status-monitor');
// const fs=require('fs');
// const zlib=require('zlib');
const PORT=8000;
const app=express();
// fs.createReadStream('./Public/50mb.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./Public/50mb.zip'));

app.use(express.static('./Public'));
app.use(status());
app.get('/', (req, res) => {
    // fs.readFile('./Public/50mb.txt',(err, data) => {
    // return res.end(data);  
    // }
    // )
    // const stream=fs.createReadStream('./Public/50mb.txt', 'utf-8');
    // stream.on("data", (chunk)=>{
    //     res.write(chunk);
    // })
    // stream.on("end", ()=>{
    //     res.end();
    // })

    return res.send(`HELLO FROM THE SERVER YOUR PROCESS ID IS ${process.pid}`);

}
) 


app.listen(PORT, (error) => {
  console.log("Application is listening on http://localhost:"+PORT);
  
}
)