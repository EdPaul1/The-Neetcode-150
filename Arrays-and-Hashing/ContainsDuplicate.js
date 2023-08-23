// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//Array.length == Set.size
//convert Set to array to use .length on both

nums = [1,2,3,1]
var containsDuplicate = function(nums) {
    //true => at least twice
    //false => distinct
    const unique = new Set(nums);
    // const uniqueArray = Array.from(unique);
    
    if (unique.size == nums.length){
        return false;
    }else{
        return true;
    }
};