# Modulos require y module export

module.exports , es el formato de exportar funciones 
para permitir a otros modulos el acceso a  dichas funciones
importanto los modulos que se requieren

ej:

        module.exports = {
            add : function(a,b){
                return a + b;
            },
            substract: function(a,b){
                return a - b ;
            },
            multiply: function(a,b){
                return a * b;
            },
            divide: function(a,b){
                return a / b ;
            }
        }



para importar un modulo 

        const math = require("./math");
        const greet = require("./greetings");
        const hello = require("./greetings/hello");

        console.log(math.add(4,10));
        console.log(math.substract(4,8));
        console.log(math.multiply(4,8));
        console.log(math.divide(8,4));

para lanzar de forma rapida en debugger  ctrl + F5