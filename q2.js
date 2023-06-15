

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
