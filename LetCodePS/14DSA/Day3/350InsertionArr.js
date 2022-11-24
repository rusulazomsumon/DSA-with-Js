let nums1 = [1,2,2,1];
let nums2 = [2,2];

let itrscArr = [];

function InsertionArray(){
    let res = [];
    for (var i = 0; i < nums2.length; i++){
        if (nums1.includes(nums2[i])){
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
}

console.log(InsertionArray());