function calculate(num1, num2, operator){
    if(operator==='+'){
        return num1 + num2;
    }
    else if(operator==='-'){
        return num1 - num2;
    }
    else if(operator==='*'){
        return num1 * num2;
    }
    else if(operator==='/'){
        if(num2===0){
            return "Infinite"
        }
        return num1 / num2;
    }
    else if(operator===""){
        return "Please select valid Operator";
    }
    else{
        return null;
    }
}

function parform(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var operator=document.getElementById("operator").value;
    
    const res=calculate(parseFloat(num1), parseFloat(num2), operator);

    result.textContent="Result is : " + res;
}