// Arrays
const lista = [
    1,
    2,
    3,
    4,
    5
];

console.log(lista);

console.log(typeof lista); // em javascript um array é considerado um objeto

const itens = [
    "lucas",
    3,
    true,
    [],
];

console.log(itens);

// Mais sobre arrays - arrays começam com o 0
const arr = ["a", "b", "c"];
console.log(arr[0]);

//Propriedades arrays
const numbers = [
    3, 5, 6, 7, 8, 9, 10, 11
];

console.log(numbers.length);
console.log(numbers.push(1));
console.log(numbers);

const myName = "Lucas";
console.log(myName.length);

//Metodos 
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers); //concatena arrays

console.log(allNumbers);

const text = "ALgum texto";

console.log(text.toUpperCase()); //deixa todo o texto em caixa alta

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g")); // indica o indice da string "g" dentro do array text

