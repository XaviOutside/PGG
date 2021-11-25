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
//*****************************************
var Vehículo = function () { };// abstracta

Vehículo.prototype.frenar = function () { console.log("Voy muy rápido"); };

var Coche = function () { Vehículo.apply(this, arguments); };

Coche.prototype = Object.create(Vehículo.prototype);

var Moto = function () { Vehículo.apply(this, arguments); };

Moto.prototype = Object.create(Vehículo.prototype);

var coche = new Coche();
coche.frenar();

var moto = new Moto();
moto.frenar();