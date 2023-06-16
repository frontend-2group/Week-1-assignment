// 문제 3번 6/16 완성!
/*
★ 코드 작성 전 생각 해보기.

배열과 정수 1개를 파라미터로 전달 받음.
-> 매개 변수 2개 받기

배열의 요소에 각각 10씩 +
-> 포문을 통해 배열의 요소를 하나씩 꺼내고 그 요소 마다 10 더하기

10이 더해진 배열과 정수1개를 비교
-> 조건문을 통해 비교 (스위치문이 좋지 않을까.. 생각)

정수1개와 값이 같은 요소가 있다면 배열의 그 요소를 제외한 배열을
반환
-> 새로운 배열을 만들고 정수값과 다른 것 만 푸쉬하고 새로 만든 배열을 반환시키기

없다면 없습니다 출력
-> default값으로 두면 되진 않을까..?
*/

function checkNum(x, y) {
  let a = [];

  for (i = 0; i < x.length; i++) {
    let value = x[i] + 10;
    if (value !== y) {
      a.push(value);
    }
  }

  switch (x.length) {
    case a.length:
      return y + "값이 없습니다.";

    default:
      return a;
  }
}

const arr = [20, 15, 321, 156, 45, 123, 45, 1, 3, 8, 9];
const a = checkNum(arr, 19);
console.log(a);
