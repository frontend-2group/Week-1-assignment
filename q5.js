

function car(km){
    let aaa = true; 
    const skill = {
        trunon(){
            if(aaa ===true){
                aaa = false
                return "시동이 걸렸습니다."
            
            }
        }
        ,
        
        turnoff(){
            if(aaa === false){
                aaa = true
                return "시동이 꺼졌습니다."
            }
        }
        ,
        drive(km){

            if(aaa === false){

                if(km>40){
                    console.log("안전위험으로 시동을 종료했습니다.")

                    return this.turnoff()

                }else if(km <=40){
                    for(i=km; i>0; i--){
                        console.log("최종목표 거리까지"+ i + "km 남았습니다.")
                    }
                }


            }
        }
    }

    return skill
}

const a = car()
console.log(a.trunon())
console.log(a.drive(50))
// console.log(a.turnoff())

