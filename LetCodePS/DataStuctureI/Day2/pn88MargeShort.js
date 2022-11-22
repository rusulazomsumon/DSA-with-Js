/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let end1 = m -1;
    let end2 = n -1;
    let end = m+n-1;
    

    while(end2 >= 0){
        if(end1 >=0){
                nums1[end--] = nums1[end1] > nums2[end2] ? nums1[end1--] : nums2[end2--];
        }else{
                nums1[end--] = nums2[end2--];
        }
    }
};

