

let yagop = ['야채곱창', 5];
let banana = ['바나나우유', 10];
let samgak = ['삼각김밥', 15];
let dosirak = ['도시락', 10];
let sandwich = ["샌드위치", 10];

function text(name, num){
    if(name==yagop[0]&&num==yagop[1]){
        console.log("전산표와 일치합니다.");
    }else if(name==banana[0]&&num==banana[1]){
        console.log("전산표와 일치합니다.");
    }else if(name==samgak[0]&&num==samgak[1]){
        console.log("전산표와 일치합니다.");
    }else if(name==dosirak[0]&&num==dosirak[1]){
        console.log("전산표와 일치합니다.");
    }else if(name==sandwich[0]&&num==sandwich[1]){
        console.log("전산표와 일치합니다.");
    }else if(name==yagop[0]&&num!==yagop[1]){
        console.log("전산표와 일치하지않습니다.");
    }else if(name==banana[0]&&num!==banana[1]){
        console.log("전산표와 일치하지않습니다.");
    }else if(name==samgak[0]&&num!==samgak[1]){
        console.log("전산표와 일치하지않습니다.");
    }else if(name==dosirak[0]&&num!==dosirak[1]){
        console.log("전산표와 일치하지않습니다.");
    }else if(name==sandwich[0]&&num!==sandwich[1]){
        console.log("전산표와 일치하지않습니다.");
    }else{
        console.log(name);
    }
}

text("야채곱창", 20);

/*
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

*/