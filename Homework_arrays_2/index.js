/*Ввести целое число N и массив из N вещественных чисел. Определить количество отрицательных элементов массива.*/

let n = 9; //длина массива
let array = [];

function checkNegative(getArray) { 
	let negative = 0;
	for (let item of getArray) {
		if(item < 0) {
			negative++
		}
	}
	console.log(getArray);
	return negative;
}

function getArray(n) { //создаем рандомный массив с помощью функции
	for(let i = 0; i < n; i++) {
		array.push((Math.random() * 10) - 5);
	}
	return array;
}

console.log(checkNegative(getArray(n)));


console.log('--------------------------------------');

// Ввести целое число N. Создать массив из N вещественных чисел. Вычислить произведение элементов, модуль которых меньше 7.

let n2 = 5; //длина массива
let array2 = [];

function getSum(getArray2) { 
	let sum = 1;
	for(let key2 of getArray2) {
		if(Math.abs(key2) < 7){
			sum *= key2;
		}
	}
	console.log(getArray2);
	return sum;
}

function getArray2(n2) { //создаем рандомный массив с помощью функции
	for(let i = 0; i < n2; i++) {
		array2.push((Math.random() * 10) - 5);
	}
	return array2;
}

console.log(getSum(getArray2(n2)));

console.log('--------------------------------------');

// Ввести целое число N и массив из N целых чисел. Вычислить сумму элементов массива, кратных 3.

let n3 = 6
let array3 = [];

function getSum3(getArray3) {
	let sum3 = 0;
	for(item of getArray3) {
		if(item % 3 == 0) {
			sum3 += item
		}
	}
	console.log(getArray3);
	return sum3;
}

function getArray3(n3) {
	for(let i = 0; i < n3; i++){
		array3.push(Math.round(Math.random() * 100));
	}
	return array3;
}

console.log(getSum3(getArray3(n3)));

console.log('--------------------------------------');

/* Ввести целое число N и массив из N целых чисел. Определить индекс наибольшего элемента массива*/

let n4 = 45;
let array4 = [];
let result = Number.MIN_VALUE;

function getMaxIndex(getArray4){
	for(let item of getArray4) {
		if(item > result) {
			result = item;
		}
	}
	console.log(getArray4);
	return getArray4.indexOf(result);
}

function getArray4(n4) {
	for(let i = 0; i < n4; i++){
		array4.push(Math.round(Math.random() * 100));
	}

	return array4;
}

console.log(getMaxIndex(getArray4(n4)));

console.log('--------------------------------------');

/* Получить все черытехзначные счастливые номера. Счастливым называется номер, у которого сумма первых двух цифр номера равна сумме последних двух цифр. Использовать функцию для рассчета суммы цифр двухзначного числа. */

let array5 = [];
let n5 = 10000;
let arrayHappyNumbers = [];

function happyNumbers(getArray5) {
	for(let item of getArray5) {
		let arrayItem = item.toString().split('');
		if((+arrayItem[0] + +arrayItem[1]) == (+arrayItem[2] + +arrayItem[3])) {
			arrayHappyNumbers.push(item);
		}
	}
	console.log(getArray5);
	return arrayHappyNumbers;
}

function getArray5(n5) {
	for(let i = 1000; i < n5; i++) {
		array5.push(i);
	}
	return array5;
}

console.log(happyNumbers(getArray5(n5)));


