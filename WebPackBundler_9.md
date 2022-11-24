### Webpack Bundlers

A module bundler for javascript.

Uses different loader to fulfill the task (like minification, concatenation etc.)

Works on resolve & reject approach
    If module is not available Promise is rejected.
    
Webpack takes modules with dependencies and generates static assets representing those modules.

So when dependencies are complex between various components Webpack is real winner to bundle application code.

Because it internally builds the dependency graph between modules to bundle the code.

Way to organize and combine many files of JS code into one file.

Can be used when project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

Webpack is module bundler tool that is used to make a single file from multiple JS modules.

Problem - 

Solution - 

It removes the ordering of dependency and added dependency on the module so it uses a single file and resolve its dependency before getting executed.