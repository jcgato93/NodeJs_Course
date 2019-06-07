# FileSystem lectura y escritura de archivos

El módulo del sistema de archivos de Node.js le 
permite trabajar con el sistema de archivos en su computadora. 
Para incluir el módulo de Sistema de archivos, use el método require ()

    const fs = require('fs');

```javascript
'use strict'

const fs = require("fs");

function incrementValues(list){
    const mapIncrement = val => Number(val) +1;
    return list.map(mapIncrement)
}



/**
* contenido del archivo que se lee
1
2
3....


Resultado esperado 
[2,3,4,5....]
*/
const readFile = (path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, list) => {
        if (err) reject(err);
  
        resolve(list.split('\n'));
      });
    });
  }
  
  const writeFile = (path, value) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, value, (err, list) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }
  
  const main = async function() {
      try {
        const fileReaded= await readFile('Resources/numbers.txt')
        const newNumbers = incrementValues(fileReaded.map(n => Number(n)));
        const save = await writeFile('Resources/numbernew.txt', newNumbers)
        
        console.log(save)
      } catch (error) {
        console.log(error)
      }   
  }
  
  main();
```


