// 448. Find All Numbers Disappeared in an Array
function findDisappearedNumbers(nums) {
    // আমরা 1 থেকে n (n = অ্যারের সাইজ) পর্যন্ত সব সংখ্যাগুলির একটি সেট তৈরি করি
    const numSet = new Set(Array.from({length: nums.length}, (v, k) => k + 1));
    
    // ইনপুট অ্যারেকে একবার ভিজিট করি
    for (const num of nums) {
        // যদি বর্তমান এলিমেন্ট সেটে আছে, তাহলে এটিকে  রিমুভ করব
        if (numSet.has(num)) {
            numSet.delete(num);
        }
    }
    
    // এবার, সেটটিকে আবার একটি অ্যারেতে রূপান্তর করে রিটার্ন করব 
    return Array.from(numSet);
}