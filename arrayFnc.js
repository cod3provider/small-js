// Дан массив с некоторыми числами, например, вот такой:

// const startArray = [123, 456, 789, 54987, 52];
// // Напишите код, который перевернет числа в этом массиве по следующему принципу:

// // [321, 654, 987]

// // console.log(startArray.reverse());
// // console.log(startArray.split(" "));

// for (let i = 0; i < startArray.length; i++) {
//   const reverseNumber = Number(
//     startArray[i].toString().split("").reverse().join("")
//   );
//   startArray.splice(i, 1, reverseNumber);
// }

// console.log(startArray);

// Дана некоторая строка с числом:

// const str = "1234567";
// // Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// // "1 234 567";

// const array = str.split("");

// let newString;

// for (let i = array.length - 1; i >= 0; i -= 3) {
//   array.splice(i + 1, 0, " ");
//   if (i === 0) {
//     newString = array.join("");
//   }
// }

// console.log(newString);

// -------Варіант 2

// function separateDigits(number) {
//   const strNumber = String(number);
//   let result = "";

//   for (let i = strNumber.length - 1; i >= 0; i--) {
//     result = strNumber[i] + result;
//     if ((strNumber.length - i) % 3 === 0 && i !== 0) {
//       result = " " + result;
//     }
//   }

//   return result;
// }

// const number = 1234567;
// const separatedNumber = separateDigits(number);
// console.log(separatedNumber); // '1 234 567'

// Дана некоторая строка:

// const str = "AbCdE";
// // Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// // 'aBcDe'

// const array = str.split("");

// let newStr = "";

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === array[i].toLowerCase()) {
//    newStr += array[i].toUpperCase();
//   } else {
//     newStr += array[i].toLowerCase();
//   }
// }

// console.log(newStr);

// Напишите функцию range(),
//   принимающую два аргумента: начало и конец диапазона,
//   и возвращающую массив, который содержит все числа из диапазона,
//   включая начальное и конечное.Третий необязательный аргумент
//     функции range() – шаг для построения массива.Убедитесь,
//   что функция range() работает с отрицательным шагом:
// например, range(5, 2, -1)

// возвращает[5, 4, 3, 2].

// function range(start, end, step = 1) {
//   const array = [];
//   if (start < end && step > 0) {
//     for (let i = start; i <= end; i += step) {
//       array.push(i);
//     }
//   } else if (start > end && step < 0) {
//     for (let i = start; i >= end; i += step) {
//       array.push(i);
//     }
//   } else if (start > end && step > 0) {
//     for (let i = start; i >= end; i -= step) {
//       array.push(i);
//     }
//   } else if (start < end && step < 0) {
//     for (let i = start; i <= end; i -= step) {
//       array.push(i);
//     }
//   }

//   return array;
// }

// console.log(range(2, 5, 1));
// console.log(range(5, 2, -1));

// Напишите функцию alphabet_order(str), которая возвращает переданную строку с буквами в алфавитном порядке.
// Пример строки: 'alphabetical'
// Ожидаемый результат: 'aaabcehillpt'

// function alphabet_order(str) {
//   return str.split("").sort().join("");
// }
// const str = "alphabetical";
// console.log(alphabet_order(str));

// Если задано число n, вернуть количество положительных нечетных чисел меньше n, ЛЕГКО!
// Пример

// function oddCount(num) {
//   const array = [];
//   for (let i = 0; i < num; i++) {
//     if (i % 2 !== 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(oddCount(7));
// console.log(oddCount(15));

//=> 3, i.e [1, 3, 5]
//=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
