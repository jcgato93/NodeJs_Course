# Debugger : Depuración de código en Node.js

https://nodejs.org/api/debugger.html

Node cuenta con un modulo especifico para hacer 
debugging de las aplicaciones 

para utilizarlo se ejeucta el siguiente comando 

> node inspect  index.js


este muestra el debugging por medio de la terminal , y esta tiene 
diferentes comandos para interacturar con el proceso , algunos de los 
comandos son :

cont , c  - Continue execution
next, n - Step next
step, s - Step index
out, o - Step out
pause  - Pause running code


otra forma es colocar dentro del codigo la instruccion  "debugger" , de 
este modo el debugger se detendra en dicho punto, para saltar de una a otra 
se utiliza el comando "cont"

para salir de la terminal de debugg   ".exit"



Utilizando VScode se puede hacer debugg desde las herramientas 
graficas solo colocando un break point de forma habitual y dando F5