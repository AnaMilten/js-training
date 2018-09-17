'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (x) {
    let words = x.split(" ");  
    
    for (let i = 0; i < words.length; i++) {
        let char = Array.from(words[i]);
        char[0]= char[0].toUpperCase();  
        words[i] = char.join ("");        
    }
    let capitilized = words.join(" ");
    return capitilized;
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase("salut micka tu vas bien"), "Salut Micka Tu Vas Bien")
assert.strictEqual(jadenCase("hello, is it me your looking for ?"), "Hello, Is It Me Your Looking For ?")
assert.strictEqual(jadenCase("i want to break free"), "I Want To Break Free")

// End of tests */
