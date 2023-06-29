// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
// const array = [1, -5, 0, 305, -11, -25];

// let sum = 0;

// array.forEach((value, index) => {
//   sum += value * value;
// });

// console.log(sum);

// Дан массив со строками.
// Используя метод map в конец значению каждого элемента массива добавьте символ
// '!'.
// const array = ["string", "string is big", "small string"];

// const result = array.map((value) => value + "!");

// console.log(result);

// Дан массив со строками.
// Используя метод map переверните символы каждой строки в обратном порядке.
// const array = ["string", "string is big", "small string"];

// const newArray = array.map((value) => value.split("").reverse().join(""));
// console.log(newArray);

// Дан массив с числами.Используя метод map запишите в каждый элемент массива значение этого элемента,
//   умноженное на его порядковый номер в массиве.
// const array = [1, -5, 0, 305, -11, -25];

// const newArray = array.map((value, index) => value * index);

// console.log(newArray);

// Дан массив с числами.
// Оставьте в нем только положительные числа.
// let arr = [1, -2, -3, 4, 5, -6];

// const newArr = arr.filter((value) => {
//   return value > 0;
// });
// console.log(newArr);

// Дан массив с числами.Оставьте в нем только числа, которые больше нуля, но меньше 10
// let arr = [1, -2, -3, 4, 5, -6, 20];

// const newArr = arr.filter((value) => value > 0 && value < 10);
// console.log(newArr);

// Дан массив с числами.Проверьте то, что все элементы в массиве больше нуля.
// let arr = [1, -2, -3, 4, 5, -6];
// let arr2 = [1, 2, 3, 4, 5, 6];

// console.log(arr.every((value) => value > 0));
// console.log(arr2.every((value) => value > 0));

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
// let arr = [1, -2, -3, 4, 5, -6];
// let arr2 = [1, 2, 3, 4, 5, -6];

// console.log(arr.some((value) => value > 0));
// console.log(arr2.some((value) => value > 0));

// Давайте найдем элемент массива, длина которого равна 2:
// let arr = ["abc", "defg", "kl", "mn"];

// console.log(arr.find((value) => value.length === 2));

// console.log(arr.filter((value) => value.length === 2));

// Давайте найдем индекс первого четного элемента массива:
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.findIndex((value) => value % 2 === 0));

// Найдем сумму элементов массива:
// let arr = [1, 2, 3, 4, 5, 6];

// console.log(
//   arr.reduce((acc, item) => {
//     return (acc += item);
//   }, 0)
// );

// Давайте найдем сумму все положительных чисел массива:
let arr = [1, -2, -3, 4, 5, -6];

console.log(
  arr
    .filter((value) => value > 0)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0)
);
