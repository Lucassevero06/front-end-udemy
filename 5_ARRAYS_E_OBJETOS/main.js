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

// // indexOf e lastIndexOf
// const myElements = ["morango", "maça", "abacate", "maça"];

// console.log(myElements.indexOf("maça"));
// console.log(myElements.indexOf("abacate")); // retorna o indice do elemento no array

// console.log(myElements.lastIndexOf("maça")); // retorna o ultimo índice que um certo elemento pode ser encontrado no array

// console.log(myElements.indexOf("mamão")); // se o elemento não existir no array, ele retorna -1

// console.log(myElements.lastIndexOf("mamão")); // se o elemento não existir no array, ele retorna -1

// // slice

// const testeSlice = [
//     "a",
//     "b",
//     "c", 
//     "d",
//     "e",
//     "f",
// ]

// const subArray = testeSlice.slice(2, 4); //é um array interno ou método de string que retorna uma cópia rasa de uma parte de um array em um novo objeto array, onde 'start' e 'end' são os índices do array.

// console.log(subArray);

// console.log(testeSlice);

// const subArray2 = testeSlice.slice(2, 4 + 1);

// console.log(subArray2);

// const subArray3 = testeSlice.slice(10, 20); // se esses indices não existirem no array, ele retorna um array vazio

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2); // dessa forma eu seleciono apenas a parte start do slice, ou seja, ele vai retornar os indices apartir do indice 2 e trazer todos a seguir, se por a caso o array tiver 100 elementos, ele retornará do 2 em diante

// console.log(subArray4);

// // foreach
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.forEach((numero) => {
//     console.log(`o numero é ${numero}`);
// });

// const post = [
//     {title: "Primeiro post", category: "PHP"},
//     {title: "Segundo Post", category: "PHP"}
// ]

// post.forEach((post) => {
//     console.log(`exibindo post: ${post.title} da categoria ${post.category}`);
// });

// // includes

// const brands = [
//     "bmw",
//     "fiat",
//     "toyota"
// ]

// console.log(brands.includes("fiat")); //é uma maneira simples e eficiente de verificar se uma array contém um determinado valor em JavaScript

// if(brands.includes("fiat")){
//     console.log("existe");
// } else {
//     console.log("não existe");
// }

// // reverse - ele inverte os elementos de um array, e ele modifica o array original
// const reverseTest = [1, 2, 3, 4, 5]

// console.log(reverseTest.reverse());
// console.log(reverseTest);

// // trim 
// const trimTeste = "  testando\n   ";
// console.log(trimTeste);
// console.log(trimTeste.trim()); //ele remove tudo que não é texto em uma string, ele não modifica o texto original

// console.log(trimTeste.length);
// console.log(trimTeste.trim().length);

// // padStart 
// const testePadStart = "1";

// const newNumber = testePadStart.padStart(4, "0"); //insere um texto no começo da string, pode ser repetido de acordo com o primeiro argumento ele insere o segundo argumento ao metodo

// console.log(testePadStart);
// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0"); //preenche a string original com um determinado caractere, ou conjunto de caraceres, (repetidamente, se necessário) para que a string resultante alcance um determinado comprimento

// console.log(testePadEnd);

// // split 
// const frase = "O rato roeu a roupa do rei de roma";

// const arrayDaFrase = frase.split(" "); //divide uma string em um array, cada elemento será determinado por um separador em comum, os mais utilizados são: ponto e virgula, virgula, espaço
// console.log(arrayDaFrase); 

// // join 
// const fraseDeNovo = arrayDaFrase.join(" "); //une um array em uma string, podemos colocar um separador também, para formatar a string
// console.log(fraseDeNovo);

// const itensParaComprar = [
//     "mouse",
//     "monitor",
//     "cadeira"
// ];

// const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
// console.log(fraseDeCompra);

// // repeat 
// const palavra = "testando ";

// console.log(palavra.repeat(5)); //repete um texto n vezes, onde n é o numero de vezes que colocamos como seu argumento

// // Rest Operator ou Rest Parameters 
// const somaInfinita = (...args) => { //é caracterizado pelo simbolo ..., podemos utiliza-lo para receber indefinidos argumentos em uma função, assim não precisamos declarar exatamente o que vamos receber, deixando a função mais ampla
//     let total = 0;

//     for (let i = 0; args.length > i; i++) {
//         total += args[i];
//     }

//     return total;
// };

// console.log(somaInfinita(1, 2, 3, 50, 100, 200)); // deixa a função sem limite de parametros

// // for of é uma estrutura de repetições semelhante ao for, porém mais simples, o numero de repetições é baseado no array utilizado, podemos nos referir aos elementos sem precisar acessar o indice deles
// const somaInfinita2 = (...args)=>{


//     let total = 0;

//     for (num of args) {
//         total += num;
//     }

//     return total;
// };

// console.log(somaInfinita2(1, 2, 3, 50, 100, 200));

// destructuring em objetos 
const userDetails = {
    fName: "Lucas",
    lName: "Gabriel",
    job: "Programador",
}
const {fName, lName, job} = userDetails //é uma funcionabilidade que nos permite desestrutrar algum dado, no caso dos objetos é possivel criar variaveis a partir das suas propriedades, com uma simples sintaxe

console.log(fName, lName, job);

// renomear variaveis
const {fName: primeiroNome, asd} = userDetails;
console.log(primeiroNome);

// destructurin com arrays
