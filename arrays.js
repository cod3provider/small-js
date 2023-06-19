
// let num1 = 5;
// let num2 = num1;
//
// num2 = 10;

// let obj1 = {name: 'Oleg'};
//
// let obj2 = {name: 'Oleg'};
// // let obj2 = {name: 'Oleg'};
//
// obj2 = {name: 'Petya'};
//
// console.log(obj2)
// console.log(obj1)
//
// obj1 = obj2;
// console.log(obj2 === obj1);
//
// console.log(obj1)
// console.log(obj2)






// // Дана строка:
//
// 	let str = 'abcde';
// // Получите массив букв этой строки.
//
// const arr = str.split("");
//
// console.log(str);
// console.log(arr);






// // Дано некоторое число:
//
// 	let num = 12345;
// // Получите массив цифр этого числа.
// const str = num.toString();
// console.log(str)
// console.log(str.split(""));
//
//
//





// // Дано некоторое число:
//
// 	let num = 12345;
// // Переверните его:
//
// const arr = num.toString().split('');
//
// const reverseArr = arr.reverse();
// console.log(reverseArr);
//
//
//





// Дано некоторое число:
// 	let num = 12345;
// Найдите сумму цифр этого числа.

// -----------Вирішення 1--------------

// let arr = num.toString().split('');
// const numbers = arr.map(number => Number(number));
//
// // console.log(numbers[0])
//
// let total = 0;
//
// for (let i = 0; i < numbers.length; i += 1) {
// 	// console.log(total);
// 	// console.log(numbers[i]);
// 	total += numbers[i];
// }
// console.log(total);



//
// // -------------Вирішення 2------------
// let num = 12345;
//
// let str = num.toString().split('');
// // const numbers = arr.map(number => Number(number));
//
// let total = 0;
//
// for (let i = 0; i < str.length; i += 1) {
// 	total += Number(str[i]);
// }
// console.log(total);





// // Заполните массив целыми числами от 1 до 10.
// let array = [1, 1.5, 2.3, 3, 4.5, 5, 6.3, 7];
//
// let newArr = [];
// for (let i = 0; i < array.length; i += 1) {
// 	if (array[i] % 1 === 0) {
// 		newArr.push(array[i])
// 	}
// };
// console.log(newArr);





// // Заполните массив четными числами из промежутка от 1 до 100.
//
// let newArr = [];
//
// // for (let i = 2; i <= 100; i += 2) {
// // 	newArr.push(i);
// // }
// //
// // console.log(newArr);
//
// for (let i = 1; i <= 100; i += 1) {
// 	if (i % 2 === 0) {
// 		newArr.push(i);
// 	}
// }
//
// console.log(newArr);





// // Дан массив с дробями:
//
// 	let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// // Округлите эти дроби до одного знака в дробной части.
//
// let newArr = [];
//
// for (let i = 0; i < arr.length; i += 1) {
// 	let newNum = arr[i].toFixed(1);
// 	console.log(newNum);
// }
//


/*

// Дан массив со строками.
// 	Оставьте в этом массиве только те строки, которые начинаются на http://.
let array = ['http://google.com', 'http://google.ua', 'google.com', 'google.ua', 'http://auf.com'];

for (let i = 0; i < array.length; i += 1) {
	if (!array[i].startsWith('http://')) {
		array.splice(i, 1);
	}
}

console.log(array);


// let newArr = [];
// for (const item of array) {
// 	if (item.startsWith('http://')) {
// 		newArr.push(item);
// 	}
// }
// console.log(newArr);
*/


/*

// Дан массив со строками.
// 	Оставьте в этом массиве только те строки, которые заканчиваются на .html.
let array = ['http://google.html', 'http://cr7.ua', 'black.html', 'css.htl', 'http://auf.html'];

// Варіант 1
for (let i = 0; i < array.length; i += 1) {
	if (array[i].endsWith('.html')) {
		// console.log('ok')
		console.log('Закінчуються не на html');
	} else {
		array.splice(i, 1)
	}
}

console.log(array);

// let newArray = [];

// for (const item of array) {
// 	if (item.endsWith('.html')) {
// 		newArray.push(item);
// 	}
// };

// console.log(newArray);
*/



/*// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let number of numbers) {
// 	number = number * 1.1;
// 	console.log(number)
// }


for (let i = 0; i < numbers.length; i += 1) {
	const num = numbers[i] * 1.1;
	const fixedNum = Number(num.toFixed(1));
	// console.log(fixedNum)
	numbers.splice(i, 1, fixedNum);
}

console.log(numbers);*/



/*
// Дано некоторое число:
	let numbers = 12345;
// Выведите в консоль все его символы с конца.

let str = numbers.toString();
let arr = str.split('');
const reverseArr = arr.reverse();
for (const item of reverseArr) {
	console.log(Number(item))
}*/




/*
// Дан некоторый массив, например, вот такой:
	let arr = [1, 2, 3, 4, 5, 6];
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:


	for (let i = 0; i < arr.length; i += 2) {
		let newArr = [];
		newArr.push(arr[i], arr[i + 1]);
		console.log(newArr);
	}

	// [1, 2]
	//
	// 	[3, 4]
	//
	// 	[5, 6]
*/




/*

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

// Слейте эти массивы в новый массив:
	// [1, 2, 3, 4, 5, 6]

let concatArr = arr1.concat(arr2);
console.log(concatArr);


// let newArr = [...arr1, ...arr2];
// console.log(newArr);
*/





/*
// Дана некоторая строка. Найдите позицию первого нуля в строке.

const str = 'abc0d5';

console.log(str.indexOf(0) + 1);
*/



/*

// Выведите в консоль все числа в промежутке
// от 1 до 1000, сумма первой и второй цифры которых равна пяти.

for (let i = 1; i < 1000; i += 1) {
	// let arr = [];

	const newI = i.toString();
	let sumI = Number(newI[0]) + Number(newI[1]);
	if (sumI === 5) {
		console.log(i)
	}
}
*/




/*

// Дан массив. Удалите из него элементы с заданным значением.
let arr = ['abc', 'bcc', 'dog', 'car', 'bcc', 'cat'];

// arr.splice(arr.indexOf('bcc'), 1);
// console.log(arr)

for (let i = 0; i < arr.length; i += 1) {
	if (arr[i] === 'bcc') {
		arr.splice(i, 1);
	}
}

console.log(arr);
*/
