// যখন আমারা জানি না, এরে Accending না Decending সেক্ষেত্রে Binary Search করার নিয়ম। 

// let arr1 = [9,8,7,6,5,4,3,2,1];
let arr2 = [1,2,3,4,5,6,7,8,9];


function OrderAgonisticBS(arr, target){
    let start = 0;
    let end = arr.length-1;
    let mid;
    let asc = true;
    if(arr[start]>arr[end]){
        asc = false;
    }
    
        // লুপ সমান বা ছোট না হওয়া পর্যন্ত চলবে 
    while(start<=end){
        if(asc){
            mid = Math.floor((start+end)/2);
            if(arr[mid] === target){
                return target+' found at index: '+mid;
            }else if(arr[mid]>target){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }else{
            mid = Math.floor((start+end)/2);
            if(arr[mid] === target){
                return target+' found at index: '+mid;
            }else if(arr[mid]>target){
                start = mid+1;
            }else{
                end = mid-1;
            }
        }
    }
    return target+' not found';

}

console.log(OrderAgonisticBS(arr2, 4));
    