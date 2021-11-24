/* N1 E1
Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.*/

function showName(name) {
    console.log("Hi " + name);
 }
 
 showName("Patricia");

 /*N2 E1
Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, guardant-los en variables i 
referenciant-les en la impressió del missatge.*/

var name1 = `Patricia Gonzalez`;
var name2 = `Patricia Llovera`;
var name3 = `Patricia Garcia`;
var name4 = `Patricia Martínez`;

function user(name1, name2, name3, name4) {
   console.log(name1, name2, name3, name4);
}

user(name1, name2, name3, name4);

/* N2 E2
Invoca una funció que retorni un valor des de dins d'una template literal.

function showName(){
    var name5 = 'Patricia González'
    var name6 = `My name is ${name5}`;
     return name6;
 }
 
 console.log(`Hola ${showName()}`);*/

 /* N3 E1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 
per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 
al 9 deu vegades.*/

 /*N3 E2
Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari
rebut com a paràmetre.*/

saludar = (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Patricia");
