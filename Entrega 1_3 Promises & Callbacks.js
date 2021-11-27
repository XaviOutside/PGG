

/* N1 E1 Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de
 si la Promise es resol o no.*/

function n1e1(parametroResolve, parametroReject) {
    return new Promise((resolve, reject) => {
        const numero = Math.floor(Math.random() * 10);
        console.log(numero);
        if (numero > 5) {
            resolve(parametroResolve);
        } else {
            reject(parametroReject);
        }
    });
}

n1e1("Es mayor que 5.", "Es menor que 5.").then(parametroResolve => console.log(parametroResolve))
    .catch(parametroReject => console.error(parametroReject));

/* N1 E2 Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge
o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.*/

funcioArrow = ptexte => console.log(ptexte);

function funcioN1E2(callback) {
    funcioArrow("Cridem a la funció")
    callback();
}
funcioN1E2(() => console.log("Programa finalizado."));

/* N2 E1 Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni 
una Promise 
efectuant la cerca en l'objecte pel seu id.
*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

getEmployee = id => {
    return new Promise((resolve, reject) => {
        let i = 0;
        for (i; i < employees.length; i++) {
            if (employees[i].id == id) {
                resolve(id);
                break;
            }
        }
        if (i >= employees.length) {

            reject(id);
        }
    })
};


getEmployee(2).then(id => console.log("Encontrado"))
    .catch(id => console.error("No encontrado"));
//

/* N2 E2 Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el
seu salari.*/



/* N2 E3 Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.*/



/* N3 E1 Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el
 mostri per  la consola.*/