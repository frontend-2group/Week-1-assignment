// 공통 문제

// 01. 가장 큰 값 구하기
console.log('-------------- 01. --------------');

const sortArr = [1,2,3,4,5];

function maxValue(){
    
    // sortArr.reverse();
    sortArr.sort((a, b) => b - a);

}
maxValue();

console.log(`maxValue: ${sortArr[0]}, sortArr = ${sortArr}`);



// 02. 편의점 물건 확인하기
console.log('-------------- 02. --------------');

const checkList = [
    {name: '야채곱창', amount: 5},
    {name: '바나나우유', amount: 10},
    {name: '삼각깁밥', amount: 15},
    {name: '도시락', amount: 10},
    {name: '샌드위치', amount: 10}
];

function checkItems(name, amount){
    
    const checkThis = checkList.filter(item => item.name === name);
    console.log(checkThis);

    if(checkThis != '') {     

        const checkAmount = checkThis.find(item => item.amount === amount);

        if(checkAmount !== undefined){
            return console.log('품목 개수 일치');    
        
        } else {
            return console.log('품목 개수 불일치');
        }

    } else {
        return console.log('전산표에 없는 품목입니다.');
    }
}

checkItems('바나나우유', 10);



// 03. 배열 다루기
console.log('-------------- 03. --------------');

const numbers = [1,2,3,4,5];
const newNumbers = [];
const theNum = compareNum(numbers, 11);

function compareNum(){
    
    numbers.forEach(item => newNumbers.push(item + 10));

    if(newNumbers.includes(11)){
        let result = newNumbers.filter(item => item !== 11);
        return result;
    } else {
        console.log('값이 없습니다.');      
    }
}

console.log(theNum);



// 04. 짝수와 홀수의 개수 각각 구하기
console.log('-------------- 04. --------------');

const arr = [1,2,3,4,5];
const a = solution(arr);

function solution(){

    let odd = arr.filter(item => item % 2 === 1);
    let even = arr.filter(item => item % 2 === 0 );

    console.log(even.length, odd.length);

}




// 05. 심화 문제
console.log('-------------- 05. --------------');
// 모르겠네요...

function car(ignition){

    if(ignition = true){

        console.log('주행을 시작합니다.');        
        
        function drive(howFar){     
            let miles = 0;
    
            while(miles++ == howFar){

                const countMiles = setInterval(()=> {

                    console.log(`현재 남은 주행 거리: ${howFar - miles}`);
                
                    if (miles++ == howFar){

                        clearInterval(countMiles);
                        console.log('주행이 완료되었습니다.');

                    } else if(miles++ == 40){
                        clearInterval(countMiles);
                        console.log('안전 위험으로 시동을 강제 종료했습니다.');
                    }
                
                }, 500)

            } 
        }
        drive(10);
    
    }

};

car(true);