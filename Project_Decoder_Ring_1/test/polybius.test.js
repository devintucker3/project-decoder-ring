// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

//When encoding, your output should still be a string.
describe('polybius()', () => {
    describe('encoding', () => {
        it('should still be a string', () => {
            const actual = polybius("i");
            expect(actual).to.be.a("string");
        });
    });
    describe('error-handling', () => {
        it('capital letters ignored', () => {
            const expected = "4432423352125413";
            const actual = polybius("thinkful");
            expect(actual).to.equal(expected);
        })
    })
    
});
/*When decoding, the number of characters in the string excluding spaces 
should be even. Otherwise, return false.*/

//Spaces should be maintained throughout.

//Capital letters can be ignored.

/*The letters "I" and "J" share a space. When encoding, both letters can be 
converted to 42, but when decoding, both letters should somehow be shown.*/