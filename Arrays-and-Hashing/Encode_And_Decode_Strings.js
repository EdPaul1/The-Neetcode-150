// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:
// vector decode(string s) {
//   //... your code
//   return strs;
// }
// So Machine 1 does:

// string encoded_string = encode(strs);
// and Machine 2 does:

// vector strs2 = decode(encoded_string);
// strs2 in Machine 2 should be the same as strs in Machine 1.

// Implement the encode and decode methods.

// Note:
// The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.
// Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.
// Do not rely on any library method such as eval or serialize methods. You should implement your own encode/decode algorithm.

//Encode function
function encode(strs) {
    let res = "";

    for (const s of strs) {
        res += s.length + "?" + s;
        //encode by adding a unique character and length of string

    }

    return res;
}

//Decode function
function decode(str) {
    const res = [];
    let i = 0;

    while (i < str.length){
        let j = i;

        while (str[j] !== "?") {
            j +=1;
        }
    const length = parseInt(str.slice(i, j));
    res.push(str.slice(j + 1, j + 1 + length));

    i = j + 1 +length;
    }

    return res;
}

// Example usage:
const originalStrings = ["Hello", "World"];
const encodedString = encode(originalStrings);
console.log(encodedString); // Output: "5?Hello5?World"

const decodedStrings = decode(encodedString);
console.log(decodedStrings); // Output: ["Hello", "World"]

// var encode = function(strs) {
//     if(!strs.length) return null;
//     return strs.join("-encodeStr");
// };

// var decode = function(s){
//     if(s === null) return [];
//     return s.split("-encodeStr");
// };