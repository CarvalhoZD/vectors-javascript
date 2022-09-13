let ageString = prompt('Type your age: ');
let age = Number(ageString);

while ( age < 18) {
    ageString = prompt('This website can only be access if you are 18 or over. Type your age: ');
    age = Number(ageString);
}

document.write('Welcome.')

let optionString;
let option;
do {
    optionString = prompt('Chose an option: \n\n1 - Caviar\n2 - Almondega\n3 - Feijoada com figado' );
    option = Number(optionString);
} while (option < 1 || option > 3);

document.write('<br><br>');

switch (option) {
    case 1:
        document.write('Chose caviar.');
        break;
    case 2:
        document.write('Chose Almondega.');
        break;
    case 3:
        document.write('Chose Feijoada com figado.');
        break;    
}   

const boletim = [];
const qtdMaterias = 3;
const qtfProvas = 3;

for (let i = 0; i < qtdMaterias; i++) {
    boletim[i] = [];
    for(let j = 0; j < qtdMaterias; j++) {
        const nota = prompt(`Digite a nota da ${j + 1}ª prova da ${i + 1} matéria.`);
        boletim[i][j] = Number(nota);
    }
}

for (let i = 0; i < qtdMaterias; i++) {
    document.write(`<br>${i + 1}ª Matéria: `)
    for (let j = 0; j < qtdMaterias; j++) {
        document.write(`${boletim[i][j]}  `)

    }
}