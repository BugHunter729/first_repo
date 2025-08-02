// Immediately invoked function expressions (ilfe)
(function chai(){
    //named ilfe
    console.log("DB CONNECTED")
})();
// semicolon is necessary when implementing ilfe because javascript doesnot know
// on its own that where the context is ending

//using ilfe in arrow function
((name)=>{
    //unamed ilfe
     console.log(`DB ${name}`)
})("kavya")

// () first parenthesis used to write function definition
// () second parenthesis execution call
// Why IIFE is Used
// 1. To Create a Private Scope
// Variables declared inside an IIFE don't pollute the global scope.
// 2. To Avoid Variable Collisions
// In larger codebases or when including multiple scripts, using IIFEs helps prevent name conflicts.
// 3. For Initialization
// You can use IIFEs to run setup code once, such as initializing a module or configuration.