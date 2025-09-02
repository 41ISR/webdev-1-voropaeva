const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentExpression = '0'; // Текущее выражение

function handleButton(button) {
    const value = button.target.textContent; // Получаем текст кнопки (например, "5", "+")
    

    
    if (currentExpression === '0') {
        currentExpression = value;


    } else if (value ==='AC') {
        currentExpression = '0';


        
    } else if (value ==='=') {

        if (currentExpression.includes("%")) {
            const numbers = input.textContent.split("%");
            const res = (numbers[0] / 100) * numbers[1];
            currentExpression = res;
        }else {

            currentExpression = eval(currentExpression.replaceAll("×", "*").replaceAll("−", "-").replaceAll("÷", "/").replaceAll("%", ""));
        }
    }

    else if(value === '%'){
        currentExpression = eval(currentExpression) + '%';

    }
    else {
        currentExpression += value;
    }
    
    display.textContent = currentExpression;

}

buttons.forEach(button => {
  button.addEventListener('click', handleButton);
});
display.textContent = currentExpression;

