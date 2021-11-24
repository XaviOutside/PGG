const objeto = {}; // Esto es un objeto vacío
// Declaración del objeto
const player = {
  name: "Manz",
  life: 99,
  strength: 10,
};
// Notación con puntos (name y life son propiedades)
console.log(player.name); // Muestra "Manz"
console.log(player.life); // Muestra 99

// Declaración del objeto
const player = {};

// Añadimos mediante notación con puntos
player.name = "Manz";
player.life = 99;
player.strength = 10;

Number.parseInt("42"); // 42
Number.parseInt("42€"); // 42
Number.parseInt("Núm. 42"); // NaN
Number.parseInt("A"); // NaN

// fB = Función B
const fB = function () {
  console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
  callback();
};

fA(fB);