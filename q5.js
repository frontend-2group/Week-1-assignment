/*
문제 5번
6/17 -- 최종 목표 5번 까지 구현 완료.
6/17 02:00 -- 구현 완료 !!
*/
/*
★ 코드 작성 전 생각 해보기.

car함수는 기능 3개가 담긴 객체를 반환해야함.

매개변수로는 최종거리까지의 숫자를 전달받음.

일단 기능 3개가 작동하는 함수를 구현하고
그 후 최종 목표 6,7,8번에 해당하는 기능 구현 해보자.


*/

function car(x) {
  let engine = true;

  let role = {
    on() {
      if (engine === true) {
        engine = false;
        return "시동이 켜졌습니다.";
      }
    },

    off() {
      if (engine === false) {
        engine = true;
        return "시동이 꺼졌습니다.";
      }
    },

    drive(num) {
      switch (engine) {
        case true:
          console.log("시동을 켜고 시도해주세요");
          break;

        case false:
          if (num <= 40) {
            let i = 1;
            let c = num;
            while (i < c) {
              console.log("목표거리까지 " + (c - i) + "km 남았습니다.");
              i++;
              if (i === c) {
                console.log("주행이 완료되었습니다.");
              }
            }
          } else {
            engine = true;
            console.log("안전상에 이유로 시동이 꺼집니다.");
          }
          break;
      }
    },
  };

  return role;
}

const sonata = car();
console.log(sonata);

console.log(sonata.on());
console.log(sonata.drive(3));
console.log(sonata.off());
/*
★★★★★★★★★★★★★★★★★★★★
문제 해결 과정 

1. car() 함수의 매개변수로 x를 전달받게 정의함.

2. 객체를 반환해야 하므로 함수 내부의 role라는 객체 생성하고 return 값으로 role 객체를 반환시킴.

3. car() 객체에 시동 켜기, 시동 끄기, 주행하기 기능을 담은 함수 3개를 정의함.
(원래 객체는 {키-값} 형태로 이루어져 있지만 키에 함수를 할당할 수 있다는 사실을 알게 됨. 이 사실을 몰라서 2시간 동안 끙끙댐.)

4. 최종 목표 6,7,8번을 구현하기 위해서는 각 함수의 실행 조건이 있어야겠다는 생각을 함.

5. 기본값을 정해놓고 각 함수를 실행할 때마다 기본값에 변화를 주면 되겠다는 생각이 듦.

6. 기본값 engine 변수를 만들고 true 값을 할당 시킴.

7. 만들어 놓았던 3개의 함수에 실행 조건으로 engine 변수를 활용함.

8. 각 함수가 실행될 때마다 engine 값을 반대로 바꾸어서 6,7,8번 목표 구현.
*/
