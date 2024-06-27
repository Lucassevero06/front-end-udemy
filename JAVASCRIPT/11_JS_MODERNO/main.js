// // Filter
// const arr = [1, 2, 3, 4, 5];

// const highNumbers = arr.filter((n) => {
//     if (n > 3) {
//         return n;
//     }
// });

// console.log(highNumbers)

// const users = [
//     {name: "matheus", available: true},
//     {name: "lucas", available: false},
//     {name: "joao", available: true},
//     {name: "maria", available: false},
//     {name: "emili", available: true},
// ]

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers)

// //Map 
// const products = [
//     {name: "camisa", price: 10.99, category: "Roupas"},
//     {name: "chaleira", price: 10.99, category: "Eletro"},
//     {name: "fogao", price: 10.99, category: "Eletro"},
//     {name: "calça jeans", price: 10.99, category: "Roupas"},
// ]
// products.map((product) => {
//     if(product.category === "Roupas") {
//         product.promocao = true;
//     }
// });

// console.log(products);

//Classes
class Product 
{
    constructor(name, price) {
        this.name =  name;
        this.price = price;
    }

    productWithDiscount(discont) {
        this.price = this.price * ((100 -discont) / 100)
    }
}

const camisa = new Product("camisa top", 100);
console.log(camisa.price);
camisa.productWithDiscount(20);
console.log(camisa.price)

//herança
class ProductWithAttributes extends Product
{
    constructor(name, price, colors) 
    {
        super(name, price);
        this.colors;
    }

    showColors() {
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const chapeu = new ProductWithAttributes(
    "chapeu", 
    50, 
    ["preto", "branco", "vermelho"]
);

console.log(chapeu);

chapeu.productWithDiscount(10);
console.log(chapeu.price)