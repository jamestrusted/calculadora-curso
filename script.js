var number1;
var number2;
var result;

var inputNumber1 = document.getElementById("number1");
var inputNumber2 = document.getElementById("number2");


function getInputValues(){

    number1 = parseFloat(inputNumber1.value)
    number2 = parseFloat(inputNumber2.value)

}

function setResult(result){
    console.log(result);
    document.getElementById("lblResult").innerHTML = 'Resultado: ' + result;

}

function calculate(operator) {

    getInputValues();
    
    if(operator == "+"){
        
        result = number1 + number2;
    }
    else if (operator == "-"){
        
        result = number1 - number2;

    }
    else if(operator == "*"){

        result = number1*number2

    }
    else{

        result = number1/number2

    }
    
    setResult(result);
    
}


