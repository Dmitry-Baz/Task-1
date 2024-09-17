let a = 15;
let b = 25;
let c = 35;
let d = 45;

// Выполняем операции и сохраняем результаты в новые переменные
let result1 = a + b;   // a + b
let result2 = d / a;   // d / a
let result3 = c * b;   // c * b
let result4 = b - b;   // b - b
let result5 = d - c;   // d - c

// Выполняем сравнения и сохраняем результаты в новые переменные
let comparison1 = a < b;    // a < b
let comparison2 = a < d;    // a < d
let comparison3 = a > b;    // a > b
let comparison4 = c >= c;   // c >= c
let comparison5 = b === d;   // b === d
let comparison6 = d === d;   // d === d
let comparison7 = c !== a;   // c !== a

// Выводим результаты в консоль
console.log("Результаты операций:");
console.log("a + b =", result1);
console.log("d / a =", result2);
console.log("c * b =", result3);
console.log("b - b =", result4);
console.log("d - c =", result5);

console.log("Результаты сравнений:");
console.log("a < b =", comparison1);
console.log("a < d =", comparison2);
console.log("a > b =", comparison3);
console.log("c >= c =", comparison4);
console.log("b === d =", comparison5);
console.log("d === d =", comparison6);
console.log("c !== a =", comparison7);