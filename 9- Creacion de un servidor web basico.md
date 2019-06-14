# Crear servidor web basico

Utilizando uno de los modulo de nodejs se puede crear un servidor 
basico http 

```javascript

const http = require ('http');
const fs = require ('fs');
const port = 3000;

// req = recibe las peticiones 
// res = da las respuestas
const server= http.createServer((req,res)=>{
    fs.readFile("./index.html",(err,data)=>{
        if(err){console.error(err); return ;}
        console.log("envíe")
        res.end(data);
        console.log("termine de enviar");
    })
})

console.log(`Servidor escuchando en el puerto ${port}`)
server.listen(port);
```