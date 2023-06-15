
let arr = [9, 1, 5, 8, 3];


function maxvalue(arr){

    arr.sort((a, b) => {
        return b - a;
    });
    let maxValue = arr[0]

    return `maxValue : ${maxValue} sortArr = ${arr}`
}

const a = maxvalue(arr)
console.log(a)