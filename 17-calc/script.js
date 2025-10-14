'use strict';

document.querySelector('.button_addition').addEventListener('click', function() {
    const num1 = Number(document.querySelector('.num_1').value);
    const num2 = Number(document.querySelector('.num_2').value);
    if (!num1 && !num2) {
        return;
    }
    const resAddition = num1 + num2;
    document.querySelector('.result_value').innerText = `Результат сложения чисел: ${num1} + ${num2} = ${resAddition}`;
});

document.querySelector('.button_subtraction').addEventListener('click', function() {
    const num1 = Number(document.querySelector('.num_1').value);
    const num2 = Number(document.querySelector('.num_2').value);
    if (!num1 && !num2) {
        return;
    }
    const resSubtraction = num1 - num2;
    document.querySelector('.result_value').innerText = `Результат вычитания чисел: ${num1} - ${num2} = ${resSubtraction}`;
});

document.querySelector('.button_multiplication').addEventListener('click', function() {
    const num1 = Number(document.querySelector('.num_1').value);
    const num2 = Number(document.querySelector('.num_2').value);
    if (!num1 && !num2) {
        return;
    }
    const resMultiplication = num1 * num2;
    document.querySelector('.result_value').innerText = `Результат умножения чисел: ${num1} * ${num2} = ${resMultiplication}`;
});

document.querySelector('.button_division').addEventListener('click', function() {
    const num1 = Number(document.querySelector('.num_1').value);
    const num2 = Number(document.querySelector('.num_2').value);
    if (!num1 && !num2) {
        return;
    }
    const resDivision = num1 / num2;
    document.querySelector('.result_value').innerText = `Результат деления чисел: ${num1} / ${num2} = ${resDivision}`;
});
