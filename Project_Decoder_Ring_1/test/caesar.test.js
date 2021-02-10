// Write your tests here!
const expect = require("chai").expect
const caesar = require("../src/caesar")

describe('caesar()', () => {
    describe('return false if there is no shift value', ()=>{
        it("return false if shift value not present", () =>{
            const actual = caesar("thinkful");
            expect(actual).to.be.false;
        });
        it("return false if shift is equal to 0", () =>{
            const actual = caesar("thinkful", 0);
            expect(actual).to.be.false;
        });
        it("return false if shift is less than -25", () => {
            const actual = caesar("thinkful", -30)
            expect(actual).to.be.false;
        });
        it("return false if shift is greater than 25", () => {
            const actual = caesar("thinkful", 30);
            expect(actual).to.be.false;
        });
    });
    
    describe('error handling', () => {
        it("spaces and non-alphabet symbols stay the same", () => {
            const expected = "zpv hpu 100%";
            const actual = caesar("You got 100%", 1);
            expect(actual).to.equal(expected);
        });
        it("capital letters aren't returned capitalized", () => {
            const expected = "crrng";
            const actual = caesar("APPLE", 2);
            expect(actual).to.equal(expected);
        });
        it("when letter is shifted off the alphabet, returns at the beginning or end and continues shift count", () => {
            const expected = "afub";
            const actual = caesar("zeta", 1);
            expect(actual).to.equal(expected);
        });
    });    
});
