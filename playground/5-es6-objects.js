const name = 'Satish'
const userAge = 23

const user = {
    uname :  name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const prod = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4 * 5
}

//const label = prod.label
//const stock = prod.stock

const {label:productLabel, stock, rating=7} = prod
console.log(productLabel)
console.log(stock)
console.log(rating)

// const transaction = (type, { label, stock = 0 } = {}) => {
//     console.log(type, label, stock)
// }

// transaction('order', product)