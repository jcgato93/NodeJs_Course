# Introduccion de datos por terminal

El módulo Readline proporciona una forma de leer un flujo de datos, una línea a la vez.
En este enlace podrás ver la documentación: https://nodejs.org/dist/latest-v10.x/docs/api/readline.html

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,// string de entrada 
  output: process.stdout// string de salida
});

// Array de preguntas
const q = [ 
  'Cual es tu primer nombre? ',
  'Cual es tu primer apellido? ',
  'Cual es tu edad? '
];

// Muestra cada pregunta
const AskQuestion = (rl, question) => {
  return new Promise((resolve, rej) => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

// Captura las respuestas
const Ask = (questions) => {
  return new Promise(async resolve => {
    let results = [];
    for (let i=0; i < questions.length; i++) {
      const result = await AskQuestion(rl, questions[i]);
      results = [...results, result];
    }
    rl.close();
    resolve(results);
  });
}

// Ejecuta el metodo Ask , el cual internamente ejecuta el AskQuestion
// eh imprime el resultado
Ask(q)
  .then(q => {
    console.log(`Hola ${q[0]} ${q[1]}, tu edad es la siguiente: ${q[2]}`);
  })
```  