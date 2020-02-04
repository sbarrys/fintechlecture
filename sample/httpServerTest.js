var http=require("http");
http.createServer(function(req,res){
    console.log("요청")
    var body= "hello Server";
    res.setHeader("Content-Type",'text/plain;charset=utf-8');
    res.end("<h1>안녕하세요</h1>");
}).listen(3000);
