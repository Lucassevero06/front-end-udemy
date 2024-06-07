// // metodos
// const animal = {
//     nome: "bob",
//     latir: function() {
//         console.log("au au");;
//     }
// };

// console.log(animal.nome);

// animal.latir();

// // aprofundando em metodos
// const pessoa = {
//     nome: "Lucas",

//     getNome: function() {
//         return this.nome;
//     },

//     setNome: function(novoNome) {
//         this.nome = novoNome;
//     },
// }
// console.log(pessoa.getNome());

// pessoa.setNome("Gabriel");

// console.log(pessoa.getNome());

// // prototype
// const texto = "asd";

// console.log(Object.getPrototypeOf(texto));

// const bool = true

// console.log(Object.getPrototypeOf(bool));

// classes basicas (forma antiga de definir classes em JS)
const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

console.log(pastorAlemao.patas);

const bullDog = Object.create(cachorro);

bullDog.raca = "BullDog";
console.log(bullDog.raca);

// função como classe
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

let hulk = criarCachorro("Hulk", "Pinscher");
console.log(hulk);

// funcções como classe

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

let dog1 = new Cachorro("Hulk", "Pinscher");

console.log(dog1);

//metodos na funcção construtora
Cachorro.prototype.uivar = () => {
    console.log("au au");
}

dog1.uivar();