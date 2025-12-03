// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code

let sum
let number = 1;
let result = 0;

while (number <= 20) {
    result = result + number;
    number++;
    sum = result;
}

console.log("Lesson01-01 - сумма чисел от 1 до 20 = " + sum);
