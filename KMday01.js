// let arrNumber = [3, 5, 2, 1, 4];
// arrNumber.sort();
// console.log(arrNumber);
/*
-> 2번째줄 이해불가.. 구글에서 가져옴 순서대로 찍히긴함
-> 문제와 함수명 불일치
*/

// let array = [1, 2, 3, 4, 5];
// let a = Math.min.apply(null, array);
// console.log(a);
//-> 역시 7번줄 이해불가.. from google 가장 큰 수가 찍힘

// const a = [1, 2, 3, 4, 5];
// a.sort().reverse();
// console.log(a);
//-> 구글.. 거꾸로 찍힘

// const maxValue = [1, 3, 5, 4, 2];
// for (let i = 0; i < maxValue.length; i++) {
//     console.log(maxValue[i]);
// }
//-> 딥다이브 P.494 참고, 숫자순서가 아닌 maxValue 그대로 출력됨..

// const arrNum = [1, 2, 5, 4, 3];
// function sortNumber(a, b) {
//     return b - a;
// }
// console.log(arrNum);
/* 구글참고.. 위에와 동일 arrNum 순서그대로 출력..
 */

/* 문제 2번 */
let giblets = 10;
let banana = 10;
let gimbab = 15;
let dosirok = 10;
let sandwich = 10;

if (giblets === 5) {
    giblets = "전산표와 일치합니다";
} else {
    giblets = "전산표와 일치하지않습니다";
}

console.log(giblets);
//giblets 비교할 대상을 만들지 못함..?ㅠㅠㅠ
//어렵네여..
