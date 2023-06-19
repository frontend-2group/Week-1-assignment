// 문제 6번 만들기

/*
evenArr함수는 3개의 배열을 파라미터로 전달받습니다. 
evenArr함수는 전달받은 3개의 배열의 요소들 중 짝수로만 이루어진 새로운 배열을
반환 합니다.

arr1 = [1,2,3,4,5]
arr2 = [10,20,30,40,50]
arr3 = [100,200,300,400,500]
*/

/*
1. evenArr함수는 매개변수로 배열 3개를 받음.
2. 배열의 요소들 중 짝수만 활용하여 새로운 배열을 만들어야함.
3. 필요한 것.
- 짝수,홀수를 구분하는 기능.
- 코드의 가독성을 위해 3개를 동시에 판단 할 기능.
*/

function evenArr(a, ar, arr) {
  const newArr = a.concat(ar, arr);

  const even_newArr = newArr.filter(function (y) {
    return y % 2 === 0;
  });

  return even_newArr;
}

arr1 = [1, 2, 3, 4, 5];
arr2 = [10, 20, 30, 40, 50];
arr3 = [100, 200, 300, 400, 500];

const jj_arr = evenArr(arr1, arr2, arr3);
console.log(jj_arr);
