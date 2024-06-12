// // adicionando eventos
// const btn = document.querySelector("#my-button");

// btn.addEventListener("click", () => {
    
//     console.log("Clicou");
    
// });

// // removendo eventos
// const secondBtn = document.querySelector("#btn");

// function imprimirMensagem() {
//     console.log("teste");
// }

// secondBtn.addEventListener("click", imprimirMensagem);

// const thirdBtn = document.querySelector("#other-btn");

// thirdBtn.addEventListener("click", () => {
//     console.log("Evento removido");
//     secondBtn.removeEventListener("click", imprimirMensagem);
// })

// // argumento do evento
// const myTitle = document.querySelector("#my-title");

// myTitle.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.offsetX);
//     console.log(event.pointerType);
//     console.log(event.target);
// })

// // propagação
// const containerBtn = document.querySelector("#btn-container");
// const btnInsideContainer = document.querySelector("#div-btn");

// containerBtn.addEventListener("click", () => {
//     console.log("Evento 1");
// })

// btnInsideContainer.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Evento 2");
// });

// // removendo evento padrão
// const a = document.querySelector("a");

// a.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("Não alterou nada");
// });

// // eventos de teclado
// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla ${e.key}`);
// })

// document.addEventListener("keydown", (e) => {
//   console.log(`Apertou a tecla ${e.key}`);
// });

// // evento de mouse
// const mouseEvents = document.querySelector("#mouse");

// mouseEvents.addEventListener("mousedown", () => {
//     console.log("pressionou botão");
// })

// mouseEvents.addEventListener("mouseup", () => {
//   console.log("soltou botão");
// });

// mouseEvents.addEventListener("dblclick", () => {
//   console.log("double click no botão");
// });

// // movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     // console.log(`no eixo x: ${e.x}`);
//     // console.log(`no eixo y: ${e.y}`);
// })

// // evento de scroll
// window.addEventListener("scroll", (e) => {
//     if(window.pageYOffset > 200) {
//         console.log("Passamos de 200px");
//     }
// })

// // evento de foco
// const input = document.querySelector("#my-input");

// input.addEventListener("focus", (e) => {
//     console.log("Entrou no input");
// })

// input.addEventListener("blur", (e) => {
//   console.log("Saiu no input");
// });

// // evento de carregamento 
// window.addEventListener("load", (e) => {
//     console.log("A pagina carregou");
// })

// // evento beforeunload
// window.addEventListener("beforeunload", (e) => {
//     e.preventDefault();
//     e.returnValue = "";
// })

// debounce
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener(
    "mousemove",
    debounce(() => {
        console.log("executando a cada 400ms");
    }, 400)
)