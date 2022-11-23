let arr = [0,10,5,2];

function mArrayInx(){
    let i = 0;
    while(1){
        if(arr[i]<arr[i+1]){
            i++;
        }else{
            return i;
        }
    }

}
console.log(mArrayInx());