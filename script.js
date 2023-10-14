let inputText = document.querySelector("textarea");
let totalChar = document.getElementById("totalChar");
let remainingChar = document.getElementById("remainingChar");
let wordChar = document.getElementById("totalWord");

let inputData = "";
let totalCharValue = 0;
let remainingCharvalue = 0;
let wordCharvalue = 1;

inputText.addEventListener("input",(e)=>{
    inputData = inputText.value;
    totalCharValue = inputData.length;
    remainingCharvalue = 100-parseInt(totalCharValue);

    totalChar.innerText = totalCharValue;
    remainingChar.innerText = remainingCharvalue;

    const arr = inputData.split(" ");
    let wordCharvalue = arr.length;
    console.log(arr.length);
    if(arr.length != 0){
        wordChar.innerText = wordCharvalue;
    }
    // console.log(inputText.value);
    
})

inputText.addEventListener("keypress",(e)=>{
    if(totalCharValue >= 100){
        e.preventDefault();
    }
})