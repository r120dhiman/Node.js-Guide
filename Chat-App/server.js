const cluster=require('cluster');
const os=require('os');
const express=require('express');
const numCPUs=os.cpus().length;
if (cluster.isPrimary) for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
}
else{
    const PORT=8000;
    const app=express();
    app.get('/', (req, res) => {
        return res.send(`HELLO FROM THE SERVER YOUR PROCESS ID IS ${process.pid}`);
    }
    )
    app.listen(PORT, (error) => {
        console.log("Application is listening on http://localhost:"+PORT);
    }
    )
}