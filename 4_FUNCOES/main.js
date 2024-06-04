// // criando uma função

// function minhaFuncao() {
//     console.log("testando");
// }

// minhaFuncao();

// // funçaõ dentro de uma variavel
// const minhaFuncaoEmVariavel = function() {
//     console.log("função dentro de uma variavel");
// }

// minhaFuncaoEmVariavel();

// function funcaoComParametro(string) {
//     console.log(`Imprimindo ${string}`);
// }

// funcaoComParametro('função com parametro');

// funcaoComParametro('outro parametro');

// // return

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function somar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = somar(a, b)

// console.log(resultado);

// console.log(somar(c, d));

// // Arrow Function
// const testeArrow = () => {
//     console.log("arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//     if(n % 2 === 0) {
//         console.log("Par");
//         return
//     }
//     console.log("Impar");
// }

// parOuImpar(4);

// // Mais sobre Arrow Functions
// const raizQuadrada = (x) => {
//     return x * x;
// }

// console.log(raizQuadrada(5));

// const raizQuadrada2 = (x) => x*x;

// console.log(raizQuadrada2(5));

// const helloWorld = () => console.log("Hello World");

// helloWorld();

// // Parametros Opcionais
// const multiplication = (m, n) => {
//     if(n === undefined) {
//         return m*2;
//     } else {
//         return m*n;
//     };
// };

// console.log(multiplication(5));

// console.log(multiplication(5, 2));

// const greeting = (name) => {
//     if(!name) {
//         console.log('Olá');
//         return
//     }

//     console.log(`Olá ${name}`)
// }

// greeting();

// greeting('Lucas');

// Argumentos com valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`;
};

console.log(customGreeting("Lucas"));
console.log(customGreeting("Lucas", "Salve papito")); 

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    };
};

repeatText("Testando", 5);

//Closure
function someFunction() {
    let txt = "Alguma coisa";

    function display() {
        console.log(txt)
    }

    display();
}

someFunction();

// Mais sobre Closure 
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));