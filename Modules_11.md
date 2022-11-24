### Modules


Module allow you to split code in parts.
Improves code management and code reusability.


import sum from './sum';
const multiply = (a, b) => {
    let total = 0;
    for(let i=0;i<b;i++) {
        total = sum(a, total);
    }
    return total;
};
export default multiply;