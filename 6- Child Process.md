# Child Process : Ejecución de subprocesos con Node.js

El módulo child_process proporciona la capacidad de generar procesos 
secundarios de manera similar, pero no idéntica. Esta función 
la proporciona principalmente la función child_process.spawn ():

Esto permite ejecutar comandos del sistema desde node.js

Ejemplo:

        DIR, ls, mkdir .... etc

```javascript
const child = require("child_process");

function execCommand(command){
    child.exec(command,(err,stdout,stderr)=>{
        if(err){
            console.log('Error: '+err); return;
        }

        if(stdout) console.log('Standar out: \n'+stdout)
        if(stderr) console.log('Standar error: \n'+stderr)
    }
    )
}

execCommand("DIR");
```        