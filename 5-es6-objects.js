//Object property shorthand

const name = "Or";
const age = "27";
const user = {
    name,
    age,
    location: "Tel Aviv"
}
// console.log(user);

// Object destructring

const product = {
    label: "Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4
}

const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

const transaction = (type, { label = "", stock = 0 } = {}) => {
    console.log(type, label, stock);
}

transaction("order", product)