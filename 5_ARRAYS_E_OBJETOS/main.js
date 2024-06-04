// // Arrays
// const lista = [
//     1,
//     2,
//     3,
//     4,
//     5
// ];

// console.log(lista);

// console.log(typeof lista); // em javascript um array é considerado um objeto

// const itens = [
//     "lucas",
//     3,
//     true,
//     [],
// ];

// console.log(itens);

// // Mais sobre arrays - arrays começam com o 0
// const arr = ["a", "b", "c"];
// console.log(arr[0]);

// //Propriedades arrays
// const numbers = [
//     3, 5, 6, 7, 8, 9, 10, 11
// ];

// console.log(numbers.length);
// console.log(numbers.push(1));
// console.log(numbers);

// const myName = "Lucas";
// console.log(myName.length);

// //Metodos
// const otherNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(otherNumbers); //concatena arrays

// console.log(allNumbers);

// const text = "ALgum texto";

// console.log(text.toUpperCase()); //deixa todo o texto em caixa alta

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g")); // indica o indice da string "g" dentro do array text

// //Objetos
// const person = {
//     name: "Lucas",
//     age: 18,
//     job: "Programador",
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.job);

// console.log(person.name.length);
// console.log(typeof person);

// // criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: "VW",
//     km: 2000,
//     model: "Tiguan",
// }

// console.log(car);

// car.doors = 4; // adicionando propriedade doors e inserindo valor 4

// console.log(car);

// delete car.km; // deletando propriedade km

// console.log(car);

// // Mais sobre Objetos
// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object); 

// const obj2 = {
//     c: []
// };

// Object.assign(obj2, obj); // copia as propriedade do obj e cola no obj2, mas ainda mantendo o obj inicial intacto
// console.log(obj2);

// // Conhecendo melhor os objetos
// console.log(Object.keys(obj)); // retorna as chaves do objeto
// console.log(Object.keys(obj2));

// console.log(Object.entries(obj)); // retorna as chaves e as propriedades do objeto
// console.log(Object.entries(obj2));

// // Mutação é a criação de um objeto a partir de outro objeto
// const a = {
//     name: "Lucas",
// }

// const b = a;

// console.log(a);
// console.log(b);

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// // Loops em arrays
// const users = ["Matheus", "Lucas", "João"]

// for (let i = 0; i < users.length; i++) { //percorrendo todo o array e agindo conforme foi determinado
//     const element = users[i];
//     console.log(`Listando o usuário: ${users[i]}`);
// }

// // push e pop
// const array = [
//     "a", "b", "c", "d", "e",
// ]

// array.push("f"); //adiciona o que estiver dentro dos parenteses no fim do array

// console.log(array);

// array.pop(); // retira o ultimo elemento do array

// console.log(array);

// const itemRemovido = array.pop();

// console.log(itemRemovido);

// console.log(array);

// array.push("z", "x", "y"); // dentro do push, pode ser inserido vários valores juntos

// console.log(array);

// // shift e unshift
// const letters = [
//     "a", "b", "c"
// ]

// const letter = letters.shift(); // shift retira o primeiro elemento do array

// console.log(letter);
// console.log(letters);

// letters.unshift("p", "q", "r"); // unshift adiciona no inicio do array

// letters.unshift("z");

// console.log(letters);

// indexOf e lastIndexOf
const myElements = ["morango", "maça", "abacate", "maça"];

console.log(myElements.indexOf("maça"));
console.log(myElements.indexOf("abacate")); // retorna o indice do elemento no array

console.log(myElements.lastIndexOf("maça")); // retorna o ultimo índice que um certo elemento pode ser encontrado no array

console.log(myElements.indexOf("mamão")); // se o elemento não existir no array, ele retorna -1

console.log(myElements.lastIndexOf("mamão")); // se o elemento não existir no array, ele retorna -1

