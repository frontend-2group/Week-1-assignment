// 1. 가장 큰 값 구하기
// 함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다. 배열로 전달받은 숫자 중 가장 큰 숫자와
// 숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.
//  const a = maxvalue([1,2,3,4,5])
//  console.log(a)
//  결과값
//  {
//  maxValue: 5,
//  sortArr = [5,4,3,2,1]
//  }
// let array = [1, 2, 3, 4, 5];
// let a = Math.max.apply(null, array);
// console.log(a);

// 6/13 문제풀이 시작
// const nums = [3, 1, 5, 2, 4, 20];
// nums.sort();
// console.log(nums); //[1, 2, 20, 3, 4, 5]

// nums.sort(function (a, b) {
//   return b - a; // 여기만 순서를 바꿔줬습니다.
// });
// console.log(nums); //[20, 5, 4, 3, 2, 1]

// 6/14 문제풀이 시작
// const a = maxvalue([1, 2, 3, 4, 5]);
// let b = Math.max.apply(null, array);

// console.log(a);
// console.log(b);

// 배열은 하나의 저장공간에 여러가지가 담긴다
// []비어있는 배열
// 배열의 요소갯수를 알려주는 기능 렝스

// []인덱스번호
// 언시프트 배열의 가로안에 수를 맨처음에 끼여넣는것 4

// 팝 배열의 맨 마지막 값을 삭제

// 슬라이스 지정한 임의의 수

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

  return console.log(b);
}

const c = maxValue([2, 5, 1, 3, 4]);
console.log(c);
// console.log(c);
