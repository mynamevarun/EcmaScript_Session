### Template Literals

Used to create dynamic strings.

var greet = 'hello';

var name = 'varun';


var string = greet + 'Guys ! This is ' + name;

var string = `${greet} Guys! This is ${name}`;

# Can use quotes inside this no need for escaping.

var string = `'${greet}' Guys! This is ${name}`;

# Can be used to create multiline string no need assignment and concatenation again and again
