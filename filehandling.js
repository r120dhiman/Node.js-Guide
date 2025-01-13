const fs=require('fs');
//sync file making
// fs.writeFileSync('./test.txt','Hello bhai')

//async file making Non-Blocking Request
// fs.writeFile('./test.txt','hello async file',err=>{
//     console.log(err)
// })


// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log('There is some error in reading the file. here are the details: ', err);
//     }
//     else{
//         console.log(result)
//     }
// })

// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt',`${Date.now()} \nHey There\n `)

// fs.cpSync('./test.txt','copy.txt');

const os = require("os");
console. log(os.cpus ().length);
//Default Thread Poll size= Noumber of cores avilable in the system
// fs.unlinkSync('./copy.txt')
