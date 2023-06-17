// 함수 solution을 숫자 배열을 파라미터로 받는다.
// 2. 배열 중 짝수와 홀수를 각각 구분하여 길이를 구한다.
// 3. 길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
//  단, 요소의 순서는 짝수, 홀수 순이다. ex)
// const arr = [1,2,3,4,5]
// const a = solution(arr)
// console.log(a)

//  결과값
// [2,3]
// [짝수의 개수, 홀수의 개수]

function solution(arr) {
  let a = 0,
    b = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      a++;
    } else {
      b++;
    }
  }

  return [a, b];
}

const arr = [1, 2, 3, 4, 5];
const a = solution(arr);
console.log(a);

// const a = solution(arr);
// console.log(a);

//?ㅠㅠ 함수 출력도 어렵네요..
