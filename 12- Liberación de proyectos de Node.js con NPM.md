# Liberación de proyectos de Node.js con NPM

En el momento en que queremos publicar un módulo en NPM debemos cumplir ciertas características:

- Entender bien las políticas de uso de NPM y contar con una cuenta en NPM.
- Revisar que tengamos en orden las restricciones con .gitignore y .npmignore.
- Revisar que el archivo package.json se encuentre en orden.
- Elegir un nombre que no entre en conflicto con el resto de los módulos publicados en NPM y que sea descriptivo.
- Documentar con un README.md y de ser necesario añadir una licencia.


## Definir el package.json

Se debe tener el archivo package.json con la informacion de nuestro proyecto , tal como el nombre del proyecto la version y una breve descripción

```json
{
  "name": "examples",
  "version": "1.0.0",
  "description": "ejemplos de node js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "say": "cowsay Hello!"
  },
  "keywords": [
    "Examples",
    "Node"
  ],
  "author": "Juan camilo castillo",
  "license": "ISC",
  "dependencies": {
    "cowsay": "1.3.1"
  }
}
```


## Hacer login en npm desde terminal 

    $ npm login


## Publicar en npm 

    $ npm publish


# Versionamiento

Por defecto npm no permite volver a publicar un proyecto con la misma version por lo que cada cambio aumenta la version del proyecto

para ello npm brinda una herramienta de versionamiento con los siguientes comandos

- $ npm version major : Cuando tiene grandes cambios que probablemente no sean compatibles con versiones anteriores , este afecta el primer digito de la version

- $ npm version minor : cambios menores o añadiduras pero aun compatibles con versiones anteriores, este afecta al digito del medio

- $ npm version patch: se utiliza para corregir errores pequeños y afecta el ultimo digito de la version

Tambien se puede añadir un comentario al cambio de version 

    $ npm version major -m "comentario"


# Eliminar un proyecto de npm

    $ npm unpublish [nombre del proyecto] -f