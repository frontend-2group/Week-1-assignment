// 문제 1번 - 미완성
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

// 문제 2번 - 미완성
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
    }
  }
}

answer("바나나우유", 50);
