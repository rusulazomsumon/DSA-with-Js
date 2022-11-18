// ###########1.Liner Search#############
 
// let arr = [12, 43, 26, 74, 29, 41, 58, 91, 10];
// let target = 58;
 
// function linerSearch(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] === target) {
//             return 'Data found at ' +i;
//         }
//     }
//     return 'Data not Found';
// }
// console.log(linerSearch(arr, target));
 
// ###########2.Binary Search#############
// অবশ্যই Shorting এরে লাগবে  accending or dessending order এ
/*
    ধাপ১ঃ Devide and Conqure
 
// */
// // ================Code Strat==============
// let arr2 = [10, 20, 30, 40, 50, 60, 70, 80]
// let target = 20;
// function binarySearch(arr, target){
//     let start = 0;
//     let end = arr2.length-1;
//     let mid;
 
//     // while loop
//     while(start<=end){
//         mid = Math.floor((start+end)/2);

//         // cheking 
//         if(arr2[mid] === target){
//             return 'Data found at Index No: '+mid;
//         }else if(arr2[mid]<target){
//             start = mid+1;
//         }else{
//             end = mid-1;
//         }
//     }
//     return 'Data Not Found';
// }

// console.log(binarySearch(arr2, target));
// // ================Code End==============

/*
Todo: Assignment 1
Write Your Won article on liner search and binary search on personal blog or notion
*/