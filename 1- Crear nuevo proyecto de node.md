# Crear nuevo proyecto de node

Para la creacion de un nuevo proyecto en node
se suele utilizar NPM 

1- crear proyecto con el siguiente comando 

    npm init

2- Este nos realizara la siguientes preguntas 

    - package name :  "nombre del projecto"
    - version : "version inicial del proyecto"
    - description: "descripcion del proyecto"
    - entry point: "El archivo desde el cual se inicia cuando se importe como paquete"
    - test command: "Es el comando de prueba"
    - git repository: "Direccion del repositorio de git"
    - keywords: "Palabras clave que funcionan como meta data para los motores de busqueda"
    - author: "Autor del proyecto"
    - license: "Por defecto es ISC"

nos preguntara si esta bien para finalizar y crear un archivo package.json

En el archivo package.json se guarda mucha de la configuracion del proyecto 
como las dependencias, que scripts se utilizan dentro del proyecto
el manejo de la version



Menejo de dependencias 

- para listar las dependencias que tiene un proyecto 
    se ejecuta el siguiente comando 

        npm ls


para installar una nueva dependencia o paquete (package)

    npm install [nombre paquete]

luego de que se instala una dependencia por primera vez
se crea la carpeta de 
node_modules  que serian las dependencias locales
y el archivo package-lock.json que se utiliza para manejo de dependencias multiples

se observa que en el archivo package.json en el campo de dependencies fue agregada una 
nueva dependencia 

    "dependencies": {
    "cowsay": "^1.3.1"
    }

se identifica con el nombre del paquete y como valor la version del paquete 
por defecto se installa la dependencia con la opcion de upgrade si existe una actualizcion de la 
version del paquete , aunque eso suele ser un problema de compatibilidad en algunos casos

        "^1.3.1"

para que se instale de manera que no busque actulizaciones se usa el comando 

    npm install [nombre paquete] --save-exact

y el resultado  "1.3.1"



Agregar y correr un script 

para agregar un nuevo script , se va al package.json en la seccion de scripts

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },

se agrega la palabra clave con la que se ejecutara el script y como valor el comando script
que debe ser ejecutado    

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "say": "cowsay Hello!"
    },


para correr el script 

    npm run say

