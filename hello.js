const http=require('http');
const fs=require('fs');
const port=3000;

const server=http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});//telling the browser that we are writting the html
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404);
            res.write('Error:file not found')
        }else{
            res.write(data);
        }
        res.end();
    })
    
})



server.listen(port,function(error){
    if(error){
        console.log(`something went wrong`,error);
    }else{
        console.log(`server is running on port ${port}\n`);
    }
    
})