'use strict';

const add = (function() {
    let input;
    const numbers = [];
    let total = 0;
  
    do {
      input = prompt('Введите любое число:', '');
  
      if (input === null) break;
      if (Number.isNaN(Number(input)) || input === '') {
        alert('Было введено не число, попробуйте еще раз');
        continue;
      }
      numbers.push(Number(input));
    } while (true);
  
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
  
    return `Общая сумма чисел равна ${total}`;
  })();
  
  console.log(add);
  