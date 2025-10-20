
let countNum = document.getElementById("score-num-home")
let countNum2 = document.getElementById("score-num-visit")
let reasetBtn = document.getElementById("reaset-btn") 

let arrowbtn = document.getElementById("fouls-box-one")
let arrowbtn2 = document.getElementById("fouls-box-two")

let scoreNum = 0 

let scoreNum2 = 0

let foulsone = 0
let foulstwo = 0

function countInc1(){
    scoreNum += 1
    countNum.textContent = scoreNum 
} 

function countInc2(){
    scoreNum += 2
    countNum.textContent = scoreNum 
} 

function countInc3(){
    scoreNum += 3
    countNum.textContent = scoreNum 
} 

function countInc11(){
    scoreNum2 += 1
    countNum2.textContent = scoreNum2 
} 

function countInc22(){
    scoreNum2 += 2
    countNum2.textContent = scoreNum2 
} 

function countInc33(){
    scoreNum2 += 3
    countNum2.textContent = scoreNum2 
} 

function reaset(){   
 scoreNum = 0 
 scoreNum2 = 0
 countNum.textContent = scoreNum 
 countNum2.textContent = scoreNum2 

  foulsone = 0
  foulstwo = 0
  arrowbtn.textContent = foulsone
  arrowbtn2.textContent = foulsone

}

function arrowup(){
    foulsone += 1
    arrowbtn.textContent = foulsone
    arrowbtn2.textContent = foulstwo

}
function arrowdown(){
    foulsone -= 1
    arrowbtn.textContent = foulsone

}

function arrowup2(){
    foulstwo += 1
    arrowbtn2.textContent = foulstwo

}
function arrowdown2(){
    foulstwo -= 1
    arrowbtn2.textContent = foulstwo

}