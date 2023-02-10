/* use describe to write a test suite. It takes a callback function as the second argument.
*  Inside of the function we can use the keyword "test" to write multiple individual test cases.
*  
*  use test.todo() to write test cases that need to be created. Make sure to remove the todo after you have written the test case 
*  
*  the .toBe matcher checks for referential equality between two objects, they might be the same in the file
*  but in memory they are two completely different objects on the heap.
*  We need to use a different matcher toEqual checks for value equality and not the object itself. toStrictEqual 
*
*/
const { headerParser } = require("./response/headerParser")

describe("Testing for how the header parser will handle request", () => {
    test("write a test case that displays the header content", () => {

        // expect(headerParser(Buffer.from(""))).toStrictEqual( 
        //     [
        //     true,
        //     {  
        //       username: { valid: false, fnf: false},
        //       password: { valid: true, '8Chars': true, specialChar: true, upperChar: true },
        //       email:    { valid: true, 'no@': true },
        //       emptyInput: {valid: true}
        //     }
        //   ]);
    });

})