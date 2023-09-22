document.addEventListener("DOMContentLoaded", function(){
    console.log("Document is ready")
    const display = document.getElementById('calc-disp');
    const buttons = document.getElementsByClassName('btn');
    let currValue = "";

    function evaluateResult() {
        const convertedValue = currValue
        .replace("×", "*")
        .replace("÷", "/")
        .replace("%", "*0.01")
        const result = eval(convertedValue);
        currValue = result.toString();
        display.value = currValue;
    }

    for (let i=0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function() {
            const value = button.innerText;

            if (value == "AC") {
                currValue = "";
                display.value = currValue;
            }
            else if (value == "=") {
                evaluateResult();
            }

            else{
                currValue += value
                display.value = currValue
            }
        })
    }
});