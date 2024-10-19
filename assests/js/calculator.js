
    let screen = document.getElementById('screen');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';
    let isOperatorClicked = false;

    document.querySelectorAll('.number').forEach(function(button) { // allow the user to enter a new value after clicking a calculation.
        button.addEventListener('click', function() {
            if (isOperatorClicked) {
                currentInput = '';
                isOperatorClicked = false;
            }
            currentInput += button.id;
            screen.innerText = currentInput;
        });
    });

    // Operations
    document.getElementById('add').addEventListener('click', function() {
        setOperator('+');
    });

    document.getElementById('minus').addEventListener('click', function() {
        setOperator('-');
    });

    document.getElementById('multiply').addEventListener('click', function() {
        setOperator('*');
    });

    document.getElementById('divide').addEventListener('click', function() {
        setOperator('/');
    });

    // Scientific operations , sin cos
    document.getElementById('sin').addEventListener('click', function() {
        currentInput = Math.sin(parseFloat(currentInput));
        screen.innerText = currentInput;
    });

    document.getElementById('cos').addEventListener('click', function() {
        currentInput = Math.cos(parseFloat(currentInput));
        screen.innerText = currentInput;
    });

    // Equals Button 
    document.getElementById('equals').addEventListener('click', function() {
        if (operator && firstOperand !== '') {
            secondOperand = currentInput;
            let result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
            screen.innerText = result;
            currentInput = result;
            operator = '';
            firstOperand = '';
            secondOperand = '';
        }
    });

    //  Clear Button 
    document.getElementById('clear').addEventListener('click', function() {
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        screen.innerText = '0';
    });

    // Dot Button
    document.getElementById('dot').addEventListener('click', function() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            screen.innerText = currentInput;
        }
    });

    // Set Operator
    function setOperator(op) {
        if (currentInput !== '') {
            firstOperand = currentInput;
            operator = op;
            isOperatorClicked = true;
        }
    }

    // Performing calculations
    function calculate(num1, num2, op) {
        switch (op) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num2 !== 0 ? num1 / num2 : 'Error';
            default:
                return num1;
        }
    }
;
