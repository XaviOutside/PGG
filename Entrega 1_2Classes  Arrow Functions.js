/* Nivell 1 Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/



(() => {
    console.log(1 + 1);
})();


/* Nivell 2 Exercici 1
Crea una arrow function que, 
rebent un paràmetre,
 retorni un objecte amb un atribut que tingui com a valor
el paràmetre rebut..*/

var func2 = y => {
    var myObj = { atrib1: y };
    return myObj;
}

func2("Hola");

/* Nivell 2 Exercici 2
Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode
dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona {
   
   dirNom(nom) {
        console.log("Hi" + nom);
    }
    }
console.log(dirNom("Pol"));

/*  Nivell 3 Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.*/
