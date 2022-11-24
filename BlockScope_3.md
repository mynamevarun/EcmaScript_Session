### Block Scope

In JS whole document is Global scope and all other things like variables, functions are combined in this global scope.

And second is local scope, variables defined inside a function are considered as Local Scope which is further divided into two parts.

    1. Block Scope - inside curly braces or for loop.
    2. Functional Scope. - inside function.

# LET vs CONST vs VAR

VAR - functional scope.
LET/CONST - block scope - remain in scope where they get defined.

function printIntegers() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}


# Always use LET to declare variables until or unless there are reasons to use VAR.
# cannot define a variable with same name again in same scope using let.

CONST - define constants. Once value is assigned it cannot be changed.
        need to initialize variables when it is declared.
        objects and arrays can be modified but cannot be reassigned.
    
const obj = {
    name: 'Varun',
    walk: function() {}
}