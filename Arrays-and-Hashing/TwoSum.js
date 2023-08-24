// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
    
    const numIndices = new Map();
        
        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            
            if (numIndices.has(complement)) {
                return [numIndices.get(complement), i];
            }
            
            numIndices.set(nums[i], i);
        }
        
        return [];
    };