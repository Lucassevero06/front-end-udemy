// // setTimeout
// console.log("Ainda não executou");

// setTimeout(() => {
//     console.log("requisição assincrona");
// }, 2000);

// console.log("Ainda não executou 2");

// // setInterval
// console.log("Ainda não começou");

// setInterval(() => {
//     console.log("intervalo assincrono"); //é algo que sera executado dentro do tempo escolhido, cuidado pois pode gerar um travamento no seu navegador de o nmumero de repetições do loop foi gigantesca
// }, 1000)

// console.log("Ainda não começou 2");

// promise
// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//     .then((value) => {
//         console.log(`A soma é ${value}`);
//         return value;
//     })
//     .then((value) => value * 5)

// console.log("Algum código 2");

// // falha na promise 
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if(Number.isNaN(n)) {
//         throw new Error("Valores invalidos");
//     }
// })
// .catch((err) => console.log(`um erro ocorreu: ${err}`))

// rejeitando promisses
function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if(n > 10) {
            resolve(`numero maior que 10`)
        } else {
            reject(new Error("Numero muito baixo"))
        }

    })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => 
    console.log(`O error que ocorreu é: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`O error que ocorreu é: ${err}`)
);

