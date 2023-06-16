// 문제 4번 6/16 해결!
/*
solution함수의 매개변수로 배열을 전달 받음.
-> 매개변수 1개 지정하기

짝수와 홀수 구분.
-> 조건문과 연산자로 구분하기

길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
-> 
새로운 배열 3개 정의하기
.length 프로퍼티 활용하기

*/
/*
ex)
const arr = [1,2,3,4,5]
const a = solution(arr)
console.log(a)

결과값
[2,3]
[짝수의 개수, 홀수의 개수] 
*/

function solution(x) {
  let a = [];
  let b = [];

  for (i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0) {
      a.push(x[i]);
    } else {
      b.push(x[i]);
    }
  }
  let c = [a.length, b.length];
  return c;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 5465, 4984, 1984, 5691561];
const a = solution(arr);
console.log(a);
