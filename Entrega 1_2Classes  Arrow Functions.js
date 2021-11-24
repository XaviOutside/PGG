
/* Nivell 1 Exercici 1

Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.*/

(() => {
    console.log(1 + 1);
})();


/* Nivell 2 Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a
 valor el paràmetre rebut.*/

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

    constructor(nom) {
        this.nom = nom;
    }

    dirNom(nom) {
        console.log(nom);
    }
}

var patricia = new Persona("Pol");
patricia.dirNom("Pol");


/*  Nivell 3 Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la amb diferents definicions.

@constructor
 @abstract
 */
var Animal = function () { };

/**
 @abstract
 */
var Cat = function () {
    Animal.apply(this, arguments);
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.hablar = function () {
    console.log('meow');
}

var cat = new Cat();



/**
 @constructor
 @abstract
 */
var Animal = function () { };// abstracta
Animal.prototype.comer = function () { console.log("Tengo hambre"); };

var Gato = function () { Animal.apply(this, arguments); };

Gato.prototype = Object.create(Animal.prototype);

var Perro = function () { Animal.apply(this, arguments); };

Perro.prototype = Object.create(Animal.prototype);

var gato = new Gato();
gato.comer();

var perro = new Perro();
perro.comer();