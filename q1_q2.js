// 6/14 문제 1번 - 미완성
// 6/15 문제 1번 - 해결!!
// 6/17 문제 1번 - sort메서드를 사용하면 간단하지만 없이 도전 해보기

function maxValue(arr) {
  arr.sort((a, b) => b - a);

  const sortOb = {
    maxValue: arr[0],
    sortArr: arr,
  };

  return sortOb;
}

const a = maxValue([2, 5, 1, 3, 4, 6, 9, 7, 8]);
console.log(a);
/*
인수로는 배열 받음

리턴으론
배열 안의 가장 큰 요소와
내림차순으로 정렬된 배열 반환
*/

// 6/14 문제 2번 - 미완성
// 6/15 문제 2번 - 완성!!
/*
해결 전 코드 
function answer(x, y) {
  let item = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
  let num = [5, 10, 15, 10, 10];

  for (i = 0; i <= 5; i++) {
    if (x === item[i]) {
      for (j = 0; j <= 5; j++) {
        if (y === num[j]) {
          console.log("전산표와 일치합니다.");
          break;
        } else {
          console.log("전산표와 일치하지 않습니다.");
        }
      }
    } else {
      console.log("해당 품목이 없습니다.")
    }
  }
}

answer("바나나우유", 50);

해결 전 발생한 문제
-> 
1. console.log가 여러번 찍힘.
2. result변수의 정의 순서가 계속 달라짐.

문제 원인
-> 
1. 반복문 실행으로 console.log가 여러번 찍힘.
2. 이중 포문으로 인해 안쪽 포문에 result 할당이 적용 되어야 하는데 
바깥 포문에 result할당이 우선순위가 되어서 갚이 재대로 나오지 않음.

문제 해결 방안
-> 
1. 비어있는 변수 result를 선언하고 해당 조건에 맞을때
break 를 이용해서 멈추게 함.
2. 포문을 1번만 활용하여 result변수 정의 순서를 맞추고,
&&연산자로 조건문을 단순화 시킴.
*/
function answer(x, y) {
  let item = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
  let num = [5, 10, 15, 10, 10];

  let result = "";

  for (i = 0; i < 5; i++) {
    if (item[i] == x && num[i] == y) {
      result = "전산표와 일치합니다.";
      break;
    } else if (item[i] == x && num[i] != y) {
      result = "전산표와 일치하지 않습니다.";
      break;
    } else if (item[i] != x) {
      result = "해당 품목이 없습니다.";
    }
  }
  return console.log(result);
}

answer("바나나우유", 10);

/*
answer('품목', 수량) 했을떄 결과값이 알맞게 나와야 함.
둘다 맞다면 : 전산표와 일치합니다 출력
수량만 다르다면 : 전산표와 다릅니다 출력
품목이 다르다면 : 해당 품목 없음 출력
*/
