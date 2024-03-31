const http = require("http");

const server=http.createServer((req,res)=>{
     
    if (req.url =='/') {
        res.write("<h1>I AM HAPPY TO LEARN FULL STACK WEB DEVELOPMENT FROM PW SKILLS!</h1>");
    } 
    
    res.end();
        
    
});
server.listen(5006);

console.log('HTTP server is running on port 5006');