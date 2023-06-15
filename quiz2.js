// let gob = 5;
// let bananamilk = 10;
// let smagak = 15;
// let dosilock = 10;
// let sandwhich = 10;

// console.log(gob);

// if (gob === 5) {
//   console.log("값이 일치합니다");
// } else if (gob !== 5) {
//   console.log("값이 불일치합니다");
// }
// 근데 이렇게 하면... 잘못된 느낌

// const store = [
//     'gob'= 5,
//     'bananamilk' = 10,
//     'samgak' = 15,
//     'dosilock' = 10,
//     'sandwhich' = 10
// ]

//엥 뭔가 이상하다

// 대경님 for문을 참고해서 다시 시작

function answer(x, y) {
  let store = {
    yagop: ["야채곱창", 5],
    banana: ["바나나우유", 10],
    samgak: ["삼각김밥", 15],
    dosirak: ["도시락", 10],
    sandwhich: ["샌드위치", 10],
  };

  let result = "";

  for (i = 0; i < 5; i++) {
    if (store[i] == x && store[i] == y) {
      result = "값이 일치합니다";
      break;
    } else if (store[i] == x && store[i] != y) {
      result = "값이 일치하지 않습니다";
      break;
    } else store[i] != x && store[i] != y;
    result = "바사삭치킨";
    break;
  }
  return console.log(result);
}

answer("바나나우유", 10); // 바사삭치킨이 나옴
// 객체로 선언해서 아마 잘 못 읽을 것 같다고 지호님이 말해주셨다
// 내일 다시 도전.!
