
const arr = [1,2,3,4,5];
let hole = 0;
let jjak = 0;

function solution(arr){
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]%2==1){
            hole++;
        }else{
            jjak++;
        }
    }

    return `짝수와 홀수의 개수는 각각  ${[jjak, hole]}  입니다`
}

const a = solution(arr)
console.log(a)
