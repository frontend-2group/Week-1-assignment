/*
1. 가장 큰 값 구하기
함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다. 배열로 전달받은 숫자 중 가장 큰 숫자와
숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다. 

ex)
    const a = maxvalue([1,2,3,4,5])
    console.log(a)

    결과값
    {
        maxValue: 5,
        sortArr = [5,4,3,2,1]
    } 
*/

function maxvalue(arr){

    arr.sort((x,y) => {
        return y - x 
    })

    let result = {
        maxvalue : arr[0],
        sortArr : arr
    }

    return result
}

const a = maxvalue([1,2,3,4,5]);

console.log(a)


/*2. 편의점 물건 확인하기

당신은 편의점에서 야간 아르바이트를 하는 학생입니다
당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
당신은 재고의 개수와 물품이 맞는지 확인해야 합니다. 일의 순서는 아래와 같습니다. 

1. 당신은 아래와 같은 전산표를 전달받습니다. 품목 갯수

야채곱창 5
바나나우유 10
삼각김밥 15
도시락 10
샌드위치 10

2. 당신은 물품을 세어본 후 해당 제품이 표의 갯수와 같은지 확인해야 합니다. 

---------------------------------------------------------------------------------------------------------------------- 최종목표

1. 물품명과 갯수를 파라미터로 전달받는 함수를 만듭니다.
함수의 이름은 마음대로 하셔도 괜찮습니다. 

2. 만약 표의 값과 갯수가 일치하지 않는다면
“전산표와 일치하지 않습니다”를 로그 합니다.
같다면
“전사표와 일치합니다“를 로그 합니다. 

3. 전산표에 없는 물건이라면 확인을 위해
해당 물건의 이름을 콘솔에 로그 합니다. 

ex) 함수명(물품명, 갯수);

결과값

”전산표와 일치합니다.“ (일치) 
”전산표와 일치하지 않습니다.“ (불일치) 
”바사삭치킨“ (품목 없음) */

const table = {
    야채곱창 : 5,
    바나나우유 : 10,
    삼각김밥 : 15,
    도시락 : 10,
    샌드위치 : 10
}

function compare(object, count){
    let keys = Object.keys(table);
    let result = ""

    for (let i=0; i<keys.length; i++) {
        if(object == keys[i] && count == table[keys[i]]){
            result = "전산표와 일치합니다."
            return result
        }else if(object == keys[i] && count != table[keys[i]]){
            result = "전산표와 일치하지 않습니다."
        }
    }

    if(result != ""){
        return result
    }else{
        result = "품목 없음"
        return result
    }
}

console.log(compare("바나나우유",10))