// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// var groupAnagrams = function(strs) {
//     const map={};
//     for(const s of strs){
//         const key=s.split('').sort().join('');
//         if(map[key]){
//             map[key].push(s);
//         }else{
//             map[key] = [s];
//         }
//     }
//     return Object.values(map);
// };

var groupAnagrams = function(strs){
    const sortedStrs = strs.map(word => word.split('').sort().join(''));
    const hash = {};

    for (let i = 0; i < strs.length; i++){
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]];
        }else{
            hash[sortedStrs[i]].push(strs[i]);
        }
    }
    return Object.values(hash)
};