/* Nivell 2 Exercici 2
Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode
dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/
/*
Declaración de una clase
class Persona {

    constructor(nom) {
        this.nom = nom;
    }
    
    static dirNom(nom) {
        console.log(nom);
       }
}
Persona.dirNom("Pol")

/*siempre q no sea static el metodo (el dirNom()) tienes q instanciar y llamar al metodo como se hace mas abajo
instanciar clase Persona (crear clase persona y lo guardo en var patricia)
var patricia = new Persona("Pol");
llamo al metodo
patricia.dirNom("Pol");*/