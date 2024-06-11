// adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", () => {
    
    console.log("Clicou");
    
});

// removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

