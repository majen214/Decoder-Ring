// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function shiftArray(arr, num) {

    let result = []
    if (num > 0) {
      // shift to the right
      const temp = arr.slice(0, num);
      result = arr.concat(temp).slice(num);

    } else {
      // shift to the left
      const temp = arr.slice(arr.length + num, arr.length);
      result = temp.concat(arr).slice(0, arr.length);
    }
    return result;
  }

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
   
    const encodedAlphabets = shiftArray(alphabets, shift);

    
    if (encode) {
      // 1. figure out the `input` alphabets index
      // for example, `cathy` -> [2, 0, 18, 7, 24]
      const chars = [...input];
      const charIndexArr = [];
      chars.forEach(char => {
          const charIndex = alphabets.findIndex(alphabet => {
            return alphabet.toLowerCase() === char.toLowerCase()
          })

          if (charIndex < 0) {
            // if the character is a space or non alphanumeric
            charIndexArr.push(char);
          } else {
            charIndexArr.push(charIndex);            
          }
      });
      
      // 2. with the input index array from #1, find the corresponding encoded alphabets
      let encodedResult = '';
      charIndexArr.map(charIndex => {
        if (encodedAlphabets[charIndex]) {
          encodedResult += encodedAlphabets[charIndex];          
        } else {
          encodedResult += charIndex; 
        }
      });
      return encodedResult.toLowerCase();
    } else {
       // 1. figure out the `input` encodedAlphabets index
      // for example, `cathy` -> [2, 0, 18, 7, 24]
      
     const chars = [...input];
      const charIndexArr = [];
      chars.forEach(char => {
          const charIndex = encodedAlphabets.findIndex(alphabet => {
            return alphabet.toLowerCase() === char.toLowerCase()
          })

          if (charIndex < 0) {
            // if the character is a space or non alphanumeric
            charIndexArr.push(char);
          } else {
            charIndexArr.push(charIndex);            
          }
      });
      // 2. with the input index array from #1, find the corresponding alphabets
    let decodedResult = '';
      charIndexArr.map(charIndex => {
        if (alphabets[charIndex]) {
          decodedResult += alphabets[charIndex];          
        } else {
          decodedResult += charIndex; 
        }
      });
      return decodedResult.toLowerCase();
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

