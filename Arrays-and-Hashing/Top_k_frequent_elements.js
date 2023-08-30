// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

var topKFrequent = function(nums, k) {
    let map = {}
    for (let num of nums) {
        if(!map[num]) map[num] =0
        map[num]++
    }
    return [...Object.keys(map)].sort((a,b) => map[b] - map[a]).slice(0,k)
};

/*
[1,1,1,2,2,3], k = 2

map => freq of uniqque elements

{
    1:3,
    2:2,
    3:1
}

sort desc and slice to (0,k)
*/ 