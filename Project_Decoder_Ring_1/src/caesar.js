// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // *make sure to return false if shift is 0, less than -25, greater than 25, or undefined*
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === undefined || shift === 0 || shift <= -25 || shift >= 25) {
      return false
    }
    // to encode or decode
    if (!encode) shift = shift - (shift * 2);
    // make letters lower case and loop through them
    let lowerCase = input.toLowerCase();
    let result = [...lowerCase].map((element) => {
      const charCoded = element.charCodeAt();
      // when character is anything other than lower case alphabet
      if (charCoded < 97 || charCoded > 122) return String.fromCharCode(charCoded);
      let newNum = charCoded + shift
      // in case newNum is outside the ASCII character set for lower case alphabet
      if (newNum < 97) return String.fromCharCode(newNum + 26);
      if (newNum > 122) return String.fromCharCode(newNum - 26);
      return String.fromCharCode(newNum);
    });
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
