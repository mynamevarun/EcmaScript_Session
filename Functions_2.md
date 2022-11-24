### Functions

# What are functions??
    1. A function is a block of organized code that is used to perform a single task.
    2. It provides better modularity and reusability and maintainability.
    3. Functions were already available in ES but ES6 provided 2 new features 
        1. Arrow Function
        2. Default Parameterized Functions

# Arrow Function
    Allows us to write shorter function syntax.

    function sayHello() {
        console.log('Hello World');
    }

    var sayHello = function() { // Function declared as a variable.
        console.log('Hello World'); 
    }

    sayHello = 'Script';

    var sayHello = () => {console.log('Hello World')};

# Default Parameterized Method

function findArea(l, b, h = 1) {
    return l * b * h;
}

findArea(2, 3, 4);
findArea(2 , 3);