//7+3

// const btn=document.querySelector("button");
// btn7.addEventListener('click',(e)=>{

// //let value=e.tagert.value;

// });

const calculator={
    displayValue:"0",
    firstOperand: null,
    //count=count+1;
    waitingForSecondOperand:false,
    operator: null,



};

//connect JS to the html DOM and add event listeners
const keys=document.querySelector('.calculator-keys');
keys.addEventListener('click',(e)=>{
    //e.target.value||e.target.name
    const{target} =e;
    const{value}=target;
    if(!target.maches("buttons")){
        return;
    }

    //identify the buttons and seperate based whether it is operator, operand,AC,=

    switch(value){
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(value);
            break;
        case ".":
            InputDecimal(value);
            break;
        case "all-clear":
            resetCalculor(value);
            break;
        default:
            //window.alert("error msg to the user")
            if(Number.isInteger(parseFloat(value))){
                inputDigit(Value);
            }
            break;
    }
    updateDisplay();
});