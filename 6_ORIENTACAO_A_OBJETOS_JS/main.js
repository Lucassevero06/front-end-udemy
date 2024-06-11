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

// // classes basicas (forma antiga de definir classes em JS)
// const cachorro = {
//     raca: null,
//     patas: 4,
// }

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bullDog = Object.create(cachorro);

// bullDog.raca = "BullDog";
// console.log(bullDog.raca);

// // função como classe
// function criarCachorro(nome, raca) {
//     const cachorro = Object.create({})

//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }

// let hulk = criarCachorro("Hulk", "Pinscher");
// console.log(hulk);

// // funcções como classe

// function Cachorro(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
// }

// let dog1 = new Cachorro("Hulk", "Pinscher");

// console.log(dog1);

// //metodos na funcção construtora
// Cachorro.prototype.uivar = () => {
//     console.log("au au");
// }

// dog1.uivar();

// // classes es6
// class CachorroClass {
//     constructor(nome, raca) {
//         this.raca = raca;
//         this.nome = nome;
//     };
// };

// const dog2 = new CachorroClass("dog2", "pitbull");

// console.log(dog2);

// console.log(Object.getPrototypeOf(dog2));

// // mais sobre Classes
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao() {
//         console.log(`Este Caminhão tem ${this.eixos} eixos, e é da cor ${this.cor}`);
//     }
// }

// const scania = new Caminhao(6, "Vermelho");
// console.log(scania);
// scania.descreverCaminhao();

// // Override nas propriedades via Prototype
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     };
// };

// const lucas = new Humano("Lucas Gabriel", 18);

// console.log(lucas);
// console.log(Humano.prototype.idade);

// Humano.prototype.idade = "Não é definida";

// console.log(lucas.idade);
// console.log(Humano.prototype.idade);

// // Symbols em classes
// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca;
//         this.turbinas = turbinas;
//     };
// };

// const asas = Symbol();
// const pilotos = Symbol();

// Aviao.prototype[pilotos] = 3;
// Aviao.prototype[asas] = 2;


// const boeing = new Aviao("Boeing", 10);
// console.log(boeing);
// console.log(boeing[asas]);
// console.log(boeing[pilotos]);

// // Getters e Setters
// class Post {
//     constructor(titulo, descricao, tags) {
//         this.titulo = titulo;
//         this.descricao = descricao;
//         this.tags = tags;
//     }

//     get exibirTitulo() {
//         return `Voce está lendo: ${this.titulo}`;
//     }

//     set adicionarTags(tags) {
//         const tagsArrays = tags.split(", ");
//         this.tags = tagsArrays;
//     }
// }

// const myPost = new Post("Titulo post", "jdsbhifgbisgbusfgbiuguig", "#sla #sla2");
// console.log(myPost);

// console.log(myPost.exibirTitulo);

// myPost.adicionarTags = "Programacao, javascript, json";

// console.log(myPost.tags);

// // Herança de classes
// class Mamifero {
//     constructor(patas) {
//         this.patas = patas;
//     }
// }

// class Lobo extends Mamifero {
//     constructor(patas, nome) {
//         super(patas, patas); //essa propriedade é herdada da classe pai
//         this.nome = nome;
//     }
// }

// const lobo = new Lobo(4, "lobinho")
// console.log(lobo);

// // instanceOf
// console.log(lobo instanceof Lobo);