let buttonOption = document.querySelectorAll(".button-option")
let restart = document.getElementById("restart")
let message = document.getElementById("message")
let newGame = document.getElementById("new-game")
let popup = document.querySelector(".popup")
let pattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [0,4,8],
    [2,5,8]
]

console.log(restart)

let xConvert = true;
let count = 0;


const winFunction = (element) => {
    disabledBtn()
    if(element == "X") {
        message.innerHTML = "&#x1F389 <br> X win";
    } else{
        message.innerHTML = "&#x1F389 <br> O win";
    }
} 


const winChecker = () => {
    for(i of pattern) {
        let [element1, element2, element3] = [
            buttonOption[i[0]].innerHTML,
            buttonOption[i[1]].innerHTML,
            buttonOption[i[2]].innerHTML,
        ]
        if (element1 != "" && element2 != "" && element3 != "") {
            if(element1 == element2 && element2 == element3){
                winFunction(element1)
            }
        }
    }
}


const disabledBtn = () => {
    buttonOption.forEach((element) => {
        element.disabled = true
    })
    popup.classList.remove("hide")
}




console.log(popup)

buttonOption.forEach( (element) => {
    element.addEventListener("click", () => {
        if(xConvert){
            element.innerHTML = "X"
            xConvert = false;
            element.disabled = true;
        } else{
            element.innerHTML = "O"
            xConvert = true;
            element.disabled = true;
        }
        winChecker()
    })
})

const enableF = () => {
    // buttonOption.innerHTML = "";
    // element.disabled = false;
    buttonOption.forEach((element) => {
        element.innerHTML = ""
        element.disabled = false
    })
}


restart.addEventListener("click", () => {
    enableF()
} )

newGame.addEventListener("click", () => {
    enableF()
    popup.classList.add("hide")
})


// let btnRef=document.querySelectorAll(".button-option")
// console.log(btnRef);
// let messageRef=document.getElementById('message')
// let popupRef=document.querySelector('.popup')
// let restart =document.getElementById('restart')
// let newGame=document.getElementById("new-game")
// let winningPattern=[
//    [0,1,2] ,
//    [0,3,6] ,
//    [2,5,8] ,
//    [6,7,8] ,
//    [3,4,5] ,
//    [2,4,6] ,
//    [0,4,8] ,
//    [2,4,6] ,
//    [1,4,7]
// ]

// let xTrun=true;
// let count=0;

// const disableButtons=()=>{
//     btnRef.forEach((element)=>{
//         element.disabled=true
//     })
//     popupRef.classList.remove('hide')
// }

// const enableButtons=()=>{
//     btnRef.forEach((element)=>{
//         element.innerHTML=""
//         element.disabled=false
//     })
//     popupRef.classList.add('hide')
// }

// restart.addEventListener("click" , ()=>{
//     count=0;
//     enableButtons()
// })
// newGame.addEventListener("click" , ()=>{
//     count=0;
//     enableButtons()
// })

// const winFunction=(letter)=>{
//     disableButtons()
//      if(letter=="X"){
//        messageRef.innerHTML="&#x1F389 ; <br> 'X' Win "
//      }
//      else{
//         messageRef.innerHTML="&#x1F389 ; <br> 'O' Win "

//      }
// }
// const winChecker=()=>{
//     for(i of winningPattern){
//         let [element1,element2,element3]=[
//             btnRef[i[0]].innerHTML,
//             btnRef[i[1]].innerHTML,
//             btnRef[i[2]].innerHTML
//         ]
//         if(element1 !="" && element2 !="" && element3 !=""){
//             if(element1==element2 && element2==element3){
//                 winFunction(element1)
//             }
//         }
//     }
// }


// btnRef.forEach((element)=>{
 
//     element.addEventListener('click' , ()=>{
      
//      if(xTrun) {
//         element.innerHTML="X" ;
//         xTrun=false;
//         element.disabled=true 
//      }
//      else{
//         element.innerHTML="O" ;
//         xTrun=true;
//         element.disabled=true 
//      }

//      winChecker()


//     })
//  





// })