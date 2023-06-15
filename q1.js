// let num = [1,2,3,4,5];
// let maxnumber;
// let sortArr = [];


// function maxValue(num){


//     for(i=0; i<num.length-1; i++){
        
//         if(num[i] < num[i+1]){
//             sortArr[i] = num[i+1];
//         }else if(num[i] < num[i+2]){
//             sortArr[i] = num[i+2];
//         }else if(num[i] < num[i+3]){
//             sortArr[i] = num[i+3];
//         }else if(num[i] < num[i+4]){
//             sortArr[i] = num[i+4];
//         }

//     }

// }

// maxValue(num);

// console.log(sortArr)
// console.log(sortArr[0]);


function maxValue(a) {
    let sortArr = [];
    for (i = 0; i <= a.length; i++) {
        if (a[i] > a[i + 1]) {
        sortArr.unshift(i);
        } else if (a[i] > a[i + 2]) {
        sortArr.unshift(i);
        } else if (a[i] > a[i + 3]) {
        sortArr.unshift(i);
        } else if (a[i] > a[i + 4]) {
        sortArr.unshift(i);
        } else {
        sortArr.unshift(i);
        }
    }
    sortArr.pop();
    let bigNum = sortArr[0];

    let b = {
    maxValue: bigNum,
    sortArr: sortArr.slice(0), 
    };

    return console.log(b); // 실행부의 값
}



const c = maxValue([2, 5, 1, 3, 4]);
// console.log(c);
