// //Instalação
// console.log(axios);

// //primeiro request com axios
// const getData = async() => {

//     try {
        
//         const response = await axios.get(
//             "https://jsonplaceholder.typicode.com/users",
//             // definindo headers
//             {
//                 headers: {
//                     "Content-Type": "applicattion/json",
//                     custom: "header",
//                 }
//             }
//         );

//         console.log(response);

//     } catch (error) {
//         console.log(error);
//     };

// };

// getData();

// //imprimindo dados na tela
// const container = document.querySelector("#user-container")

// const printData = async() => {

//     const data = await getData();

//     console.log(data);

//     data.forEach((user) => {

//         const div = document.createElement("div");

//         const nameElement = document.createElement("h2");
        
//         nameElement.textContent = user.name;

//         div.appendChild(nameElement);

//         const emailElement = document.createElement("p");

//         emailElement.textContent = email.user

//         container.appendChild(div);

//     });
// }
// printData();

// post 
const form = document.querySelector('#post-form');
const title = document.querySelector('#title');
const body = document.querySelector('#body');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: title.value,
        body: body.value, 
        userId: 1,
    })
})