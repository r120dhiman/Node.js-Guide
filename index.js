const http=require('http')
const fs=require('fs')
const url=require('url')

const myServer=http.createServer((req, res) => {
  const logdata=(`${Date.now()}: New Request recived from user ${ req.headers.host} on URL ${req.url} ${req.method} \n`)
  const myurl=url.parse(req.url, true);
  console.log(myurl)
  fs.appendFile('./logdata.txt',logdata, (err, data) => {
    switch (myurl.pathname) {
        case '/':
          if(req.method==='GET')
            res.end("Hello from server\nCurrently you are on Home page");
            break;
        case '/about':
          const username=myurl.query.name;
          const search1=myurl.query.search;
          res.end(`Hi ${username}\nHappy to see you here\nI guess you have searched for ${search1}`);
            break;  
        case '/signup':
          if(req.method==='GET'){res.end("Enter the details for signup on the website")}
            else if(req.method ==='POST'){
          //DB query
          res.end('Signup done')
            };
            break;
          default:
            res.end("404 Not Found")
            break;
    }
  }
  )
}
);
myServer.listen(3000, () => {
  console.log("Server started")
  console.log("\nYou are listening it on http://localhost:3000")
}
);

