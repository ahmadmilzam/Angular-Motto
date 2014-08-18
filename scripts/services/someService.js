//  To avoid polluting the global namespace, wrap all of your functions in an IIFE. 
//  It is advised to have this happen at compilation/concatenation but including it here as an example.
(function() {
    
    // All Services are singletons, using .service() or .factory() differs the way Objects are created.

    // This file gives an example of using a .service().
    // These act as a constructor function and are instantiated with the 'new' keyword. 
    // Use 'this' for public methods and variables.

    function SomeService() {
        this.someValue = 1;

        this.someMethod = function() {
            return this.someValue + 10;
        }
    }

    
    // Pass functions into module methods rather than assigning a callback.
    // This helps aid with readability and helps reduced the amount of code "wrapped"
    // inside Angular.
    angular.module('app')
    .service('SomeService', SomeService);

})();