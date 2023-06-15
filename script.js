// let myPoints = 5
//
// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable
//
// function add3Points(num) {
// 	return num += 3;
// };
//
// console.log(add3Points(myPoints));
//
// function remove1Point(num) {
// 	return num -= 1;
// };
//
// console.log(remove1Point(myPoints));




// 4. // Try to predict what each of the lines will log out
// console.log("2" + 2) // "22" / 4
// console.log(11 + 7) // 18
// console.log(6 + "5") // 11 / "65" / '65'
// console.log("My points: " + 5 + 9) // "My points: 59" / "My points: 14"
// console.log(2 + 2) // 4
// console.log("11" + "14") // "1114"
// console.log(NaN + "5")
// console.log(null + "5")





// 'Дана строка. Выведите в консоль последний символ строки.'
// const str = 'Дана строка. Выведите в консоль последний символ строки.';
//
// const lastIdx = (str.length - 1);
//
// console.log(str[lastIdx])
// console.log(str[str.length - 1])
//
// // // console.log((str.length - 1))



// // 'Дано число. Проверьте, четное оно или нет.';
//
// // const numbers = [1, 2, 3, 4, 5, 6, 7];
//
// const number = 3;
//
// function test (num) {
// 	if (num % 2 === 0) {
// 		return 'чьотне'
// 	}
// 	return 'не чьотне'
// }
//
// console.log(test(number));



// // Даны два слова. Проверьте, что первые буквы этих слов совпадают.
//
// const word = 'pokemon';
// const otherWord = 'pikachu';
// function test(word1, word2) {
// 	// return (word1[0].includes(word2[0]))
// 	if (word1[0] === word2[0]) {
// 		return 'Співпадає'
// 	}
// 	return 'Не співпадає';
// }
//
// console.log(test(word, otherWord));
// console.log(test('hello', 'bye'));



// // Дано слово. Получите его последнюю букву.
// // Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
//
// const word1 = 'Січень';
// const word2 = 'Лютий';
//
// function test(word) {
// 	const lastLetter = word.length - 1;
// 	if (word[lastLetter] === 'ь') {
// 		return word[lastLetter - 1]
// 	}
// 	return word[lastLetter];
// }
//
// console.log(test(word1));
// console.log(test(word2));




// // Дано число. Выведите в консоль первую цифру этого числа.
//
// const number1 = 100;
// const number2 = 50;
//
//
// function test(num) {
// 	return num.toString()[0];
// }
//
// console.log(test(number1));
// console.log(test(number2));



// // Дано число. Выведите в консоль последнюю цифру этого числа.
// //
// const number1 = 101;
// const number2 = 53;
//
//
// function test(num) {
// 	// const str = num.toString();
// 	// return str[str.length - 1];
// }
//
// console.log(test(number1));
// console.log(test(number2));



// // Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
//
// const number1 = 101;
// const number2 = 9107;
// const number3 = 53;
//
// function test(num) {
// 	const str = num.toString();
// 	const firstLetter = str[0];
// 	const lastIdx = str.length - 1;
// 	const lastLetter = str[lastIdx];
//
// 	return Number(firstLetter) + Number(lastLetter);
// }
//
//
// console.log(test(number1));
// console.log(test(number2));
// console.log(test(number3));




// // Дано число. Выведите количество цифр в этом числе.
//
// const number1 = 101;
// const number2 = 9107;
// const number3 = 5357123;
//
// function test(num) {
// 	return num.toString().length;
// }
//
// console.log(test(number1));
// console.log(test(number2));
// console.log(test(number3));






// // Дано число, виведіть суму цифр числа.
//
// const number1 = 101;
// const number2 = 9107;
// const number3 = 5357123;
//
// function sum(num) {
// 	const str = num.toString();
// 	let number = 0;
// 	for (let i = 0; i < num.toString().length; i += 1) {
// 		number += Number(str[i]);
// 	}
// 	return number;
// }
//
// console.log(sum(number1));
// console.log(sum(number2));
// console.log(sum(number3));







// // Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
//
// const number1 = 101;
// const number2 = 9107;
// const number3 = 1357123;
//
// function test(num1, num2) {
// 	// Варіант 1
// 	// return num1.toString()[0].includes(num2.toString()[0]);
//
// 	// Варіант 2
// 	if (num1.toString()[0] === num2.toString()[0]) {
// 		return 'Співпало';
// 	}
//
// 	return 'Не співпало';
// }
//
// console.log(test(number1, number2));
// console.log(test(number2, number3));
// console.log(test(number3, number1));






// // Дана строка.
// // Если в этой строке более одного символа,
// // выведите в консоль предпоследний символ этой строки.
//
// const str = 'Артем, ти багато чого пропустив';
// const str1 = 'Але, ще багато чого попереду';
// const str2 = '1';
//
// function test(string) {
// 	if(string.length > 1) {
// 		const preLastIdx = string.length - 2;
// 		return string[preLastIdx];
// 	}
// 	return 'В строці менше 2 символів';
// }
//
// console.log(test(str));
// console.log(test(str1));
// console.log(test(str2));




// Даны два целых числа.
// Проверьте, что первое число без остатка делится на второе.


const number1 = 100;
const number2 = 50;
const number3 = 150;

function sum(num1, num2) {
	if (num1 % num2 === 0) {
		return 'Ok';
	}

	return 'Not ok';
}

console.log(sum(number1,number2));
console.log(sum(number3, number2));
console.log(sum(number3, number1));
