let arr = [1, 2, 3, 4, 5];

function examine(arr,test) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        let data = arr[i] + 10;
        result.push(data);
        

    }

    for (i = 0; i < arr.length; i++) {
        if(result[i]===test){
            result.splice(i,1)
            return result
        }
    }

    return "결과값이 없습니다"
}

const a = examine(arr,12);
console.log(a);