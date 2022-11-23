/* 
1539. Kth Missing Positive Number
link: https://leetcode.com/problems/kth-missing-positive-number/

*/

let arr = [1,2,3,4]
let k = 2;

// missting empty array
let misArr = [];
// ধরি, ১ মিসিং, num সব মিসিং 
let num = 1;
let i = 0;

while(1){
    if(num==arr[i]){
        //জদি পাই, তাহলে পরের নম্বর চেক করব। 
        i++;
        num++;
    }else{
        misArr.push(num);
        num++;
        // জদি মিসিং এরে লেংথ টার্গেট এর বেশি হয়, বের হয়ে জাব 
        if(misArr.length>k){
            break;
        }
    }
}

console.log(misArr[k-1]);
