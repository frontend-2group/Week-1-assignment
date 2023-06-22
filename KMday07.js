/*
5. 심화문제 (선택)
심화 문제의 올바른 풀이를 위해서는 아직 배우지 않은 개념도 이해하고 있어야 합니다.. (클로저, this) 
그러나 반드시 올바르게 문제를 풀이하지 않아도 괜찮으니 아래와 같은 기능을 구현해보세요.
올바른 풀이가 아닌 현재까지 배운 개념만으로도 기능 작동에는 문제가 없는 것을 확인하였습니다.

아래와 같은 기능을 하는 오브젝트를 반환하는 함수를 만드세요
파라미터로는 최종 목표지 까지와의 거리를 전달 받습니다.
함수 이름은 car입니다. car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다.
해당 자동차는 연식이 오래되어 최대 40km밖에 운전하지 못합니다.
40km 이상 주행하려고 한다면 안전 사고 위험이 있어 강제로 시동을 종료합니다. 
주행거리까지 1km 단위로 상황판(콘솔)에 나타납니다.

최종 목표
1. 시동이 걸리면 시동이 걸렸다는 메시지가 콘솔에 로그됩니다.
2. 시동이 꺼지면 시동이 꺼졌다는 메시지가 콘솔에 로그됩니다.
3. 주행 중이면 최종 목표 거리까지 1km 단위로 콘솔에 거리가 로그됩니다.
4. 최종 목표거리에 도달하면 주행이 완료되었다는 메시지가 콘솔에 로그됩니다. 
5. 최종 목표거리가 40km 이상인 상태에서 주행을 시도하면
    안전 위험으로 시동을 종료했다는 메시지가 콘솔과 로그됨과 동시에 시동이 꺼집니다. 
6. 시동이 걸리지 않으면 주행을 할 수 없습니다.
7. 시동이 걸려있는 상태에서 시동을 다시 걸 수 없습니다.
8. 시동이 꺼져있는 상태에서 시동을 다시 끌 수 없습니다.
*/

// const slowcar = { on, Off, drive, limit, safe };

function car(far) {
    let result = console.log(`${far}km 주행중입니다`);

    switch (far) {
        case far > 0:
            console.log("시동이 걸렸습니다");
            break;
        case (far = 0):
            console.log("시동이 꺼졌습니다");
            break;
        case (far = 40):
            console.log("목적지에 도착하였습니다");
            break;
        default:
            result;
    }
}

// console.log("시동이 걸렸습니다");
// console.log("시동이 꺼졌습니다");

// console.log(`${x}km 주행중입니다`);
// console.log("목적지에 도착하였습니다");
// console.log("안전상의 이유로 시동이 꺼집니다");

const x = car(40);
console.log(x);

//x는 왜 undefined인가.. 10단위로 만드는거. 안전상의 이유,
// 문제에서 '아래와 같은 기능을 하는 오브젝트를 반환하는 함수를 만드세요' 'car는 각각 시동걸기, 시동끄기, 주행 기능을 가지고 있습니다.'는
//어떻게 해야하는것인가....ㅠㅜ오늘도 미제

// Q1. make a string out of an array

const fruits = ["apple", "banana", "orange"];
const result = fruits.join("&");
console.log(result);

// Q2. make an array out of a string
{
    const fruits = "🍎, 🥝, 🍌, 🍒";
    const a = fruits.split(",", 2);
    console.log(a);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    // const b = array.sort((a, b) => b - a);
    // console.log(b);
    // console.log(array);

    const b = array.reverse();
    console.log(b);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const c = array.splice(0, 2);
    // console.log(array);
    //splice은 원본 자체 삭제! -> 문제에서는 NEW array이므로 사용 불가!

    const c = array.slice(2, 5);
    console.log(c);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student("A", 29, true, 45),
    new Student("B", 28, false, 80),
    new Student("C", 30, true, 90),
    new Student("D", 40, false, 66),
    new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
    const d = students.find((student) => student.score === 90);
    console.log(d);
}

// Q6. make an array of enrolled students
{
    const e = students.filter((student) => student.enrolled);
    console.log(e);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const f = students.map((student) => student.score);
    console.log(f);
}

// Q8. check if there is a student with the score lower than 50
{
    const g = students.some((student) => student.score < 50);
    console.log(g);
}

// Q9. compute students' average score
{
    // const h = students.reduce((prev, curr) => {
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);

    const h = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(h / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const i = students
        .map((student) => student.score)
        .filter((score) => score > 50)
        .join();
    console.log(i);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'

const j = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
console.log(j);
