# Crear servidor web con express

Express es un framework para la creacion sencilla de un servidor web con 
Node js

- Lo primero es instalar las dependencias necesarias , express y nodemon.

        $ npm install express nodemon --save


- Crear instancia del server
```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.listen(port ,()=>{
    console.log(`Server listening on port ${port}`)
});
```


## Establecer metodos http que respondan a las peticiones

```javascript
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/*
req = request ,peticion http
res = response , respuesta por parte del server
*/
app.get("/",(req,res)=>{
    res.send("From home");
});


app.listen(port ,()=>{
    console.log(`Server listening on port ${port}`)
});
```

