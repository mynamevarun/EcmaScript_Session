### Spread

let a = [1,2,4];
let b = [2,3,5];


let merged = [...a, ...b];

Add manual elements.
Can be used to clone an array.

### Rest

let sumElements = (...elements) => {
    return elements.reduce((acc, ele) => acc += ele, 0);
}

sumElements(1,2,3,4,5,6);