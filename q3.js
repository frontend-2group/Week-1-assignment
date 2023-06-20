
let arr = [1,2,3,4,5];


function plusten(arr, num){
    for(i=0; i<=arr.length-1; i++){
        arr[i] += 10;

        if(arr[i]===num){
            arr.splice(i,1);
            arr[i] +=10;
        }

    }

    if(arr.find(num)==5){
        return "검사하고자 하는 값이 없습니다."
    }else if(arr.length==4){
        return arr
    }

}


const a = plusten(arr, 12);
console.log(a);

