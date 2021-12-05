/*La finalitat de les funcions asíncrones és simplificar el comportament de l'ús síncron de Promises i 
realitzar algun comportament específic en un grup de Promises. De la mateixa manera que les Promises són 
semblants a les devolucions de crides estructurades, les funcions amb async/await s'assemblen a una 
combinació de generadors i promeses.

Utilitza l'intèrpret de node en tots els casos.*/

/*N1 E1
Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant 
la cerca en l'objecte pel seu id. Crea una altra arrow function getSalary que rebi com a paràmetre un objecte 
employee i retorni el seu salari.*/
// TODO crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.
// TODO Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari. 

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
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

getSalary = id => {
    return new Promise((resolve, reject) => {
        let i = 0;
        for (i; i < salaries.length; i++) {
            if (salaries[i].id == id) {
                resolve(id);
                break;
            }
        }
        if (i >= salaries.length) {
            reject(id);
        }
    })
};

/* N1 E2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu 
salari, usant les funcions que has definit a l'exercici anterior */

async function n1e2(id){
    employeeId = await getEmployee(id);
    salaryId = await getSalary(employeeId);
    console.log(`Empleat ${employees[employeeId].name} amb salari ${salaries[salaryId].salary}`);
}

n1e2(1);

// TODO crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.
// TODO crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

/* N2 E1
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció
 resolve() després de 2 segons de la seva invocació */

 n2e1function2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('2 seconds later...'), 2000)
      })
 }

 async function n2e1() {
    console.log(await n2e1function2());
 }

 n2e1();

// TODO Crea una nova funció asíncrona 
// TODO que cridi a una altra 
// TODO que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació 

/* N3 E1
Captura tots els errors possibles dels nivells 1 i 2 */

// TODO Captura tots els errors possibles dels nivells 1

// TODO Captura tots els errors possibles dels nivells 2
