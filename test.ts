
// // Given an integer array nums of length n,
// you want to create an array ans of length 2n
// where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.



// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]



let array1 = [1, 2, 3]


function duplicateAnArray(array) {
    return array.concat(array)

}

let pikaball = duplicateAnArray(array1);

console.log(pikaball)





function isPalindrome(string: string) {
    // split('') turns the string into an array of its characters
    // reverse() reverses the array
    // join('') joins the array into a string with no separator character
    // be careful not to use join() because it will separate with a comma
    const reversed = string.split("").reverse().join('')
    return reversed == string
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("test"))