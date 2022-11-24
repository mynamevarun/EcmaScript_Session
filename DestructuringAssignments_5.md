### Destructuring


1. Array Destructuring
2. Object Destructuring


const address = {
    street: '',
    city: '',
    state: ''
}

let street = address.street;

let city = address.city;

let {street, city} = address;
console.log(city);
console.log(street);

Useful when interested in some properties.

We can use aliases

let {street: s} = address;

console.log(s);
