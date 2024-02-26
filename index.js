const http = require("http");
let server = http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/html; charset=utf-8"
    });
    res.end("<h1>MY FIRST PROJECT</h1><br><h2>GMURAD97</h2>");
});

const PORT = 3000;
const HOST = "localhost";

server.listen(PORT,HOST,function(){
    console.log(`Server Listening on HOST:PORT - http://${HOST}:${PORT}`);
});