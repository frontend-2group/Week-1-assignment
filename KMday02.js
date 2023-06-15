/* 2번문제 -> 대경님 깃허브로 공부했음 수현,대경,지호님이 설명해주심*/

function answer(x, y) {
    let items = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
    let num = [5, 10, 15, 10, 10];

    let result = "";

    for (i = 0; i < 5; i++) {
        if (items[i] == x && num[i] == y) {
            result = "전산표와 일치합니다";
            break;
        } else if (items[i] == x && num[i] !== y) {
            result = "전산표와 일치하지 않습니다";
            break;
        } else if (x != items[i]) {
            result = "품목없음";
        }
    }
    // console.log(result);
    return result;
}

// answer("바나나우유", 5);
// answer("바사삭치킨", 2);
// answer("");

let vol = answer("바나나우유", 10);

console.log(vol);

// console.log(answer("바나나우유", 10));

/* 
1번문제 -> 지호님이 설명해주심!!
*/

// 지호님 코드

// function maxvalue(arr) {
//     arr.sort((x, y) => {
//         return y - x;
//     });

//     let result = {
//         maxvalue: arr[0],
//         sortArr: arr,
//     };

//     return result;
// }

function maxvalue(arr) {
    arr.sort(function (a, b) {
        return b - a;
    });

    // function 함수명 (변수)
    // sort 정렬해주는 함수
    // b-a하면 거꾸로, a-b하면 순서대로

    let result = {
        maxValue: arr[0],
        sortArr: arr,
    };
    //이미 앞에서 가장 큰수기준으로 정렬했기때문에 가장 맨앞이 가장 큰수 -> arr[0]이 가장 큼

    return result;
}

const a = maxvalue([1, 2, 3, 4, 5]);
console.log(a);
//배열할때 []괄호 안에 넣음. 문자, 숫자 노상관

//지호님에게 계속 질문만해서 죄송합니다..ㅠㅠ.. 그럼에도 불구하고 다 설명해주셔서 감사합니다ㅠㅠㅠㅠㅠㅠ
//모두 덕분에 2문제라도 이해하고 넘어갑니다.. 안그랬으면 정말 그냥 시간만 버리는 공부였을듯..
