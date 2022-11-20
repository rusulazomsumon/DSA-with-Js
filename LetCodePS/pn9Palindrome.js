// 9. Palindrome Number
// link: https://leetcode.com/problems/palindrome-number/
// Given an integer x, return true if x is a palindrome, and false otherwise.

//  

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//  

// Constraints:

//     -2e31<= x <= 2e31 - 1

// Solution: 

 function isPalindrome(x){
    if(x<0){
        return false;
    }else{
        // দেওয়া নম্বরটির gNum এ কপি করে রাখি...।। 
        var gNum = x; 
        // রিভাইস নম্বর, rNum
        var rNum = 0;
        // যতক্ষণ না x ছোট হতে হতে ০ হয়,.........।। 
        while(x>0){
            rNum = (rNum*10)+(x%10);
            x = Math.floor(x/10);
        }
        return gNum === rNum;
    }
}

// output 
console.log(isPalindrome(124421));