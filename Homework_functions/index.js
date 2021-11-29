//1
console.log('Задание 1');

function square(numSquare) {
	return numSquare * numSquare;
}

console.log(square(5));

//2 
console.log('Задание 2');

function sumNumbers(a, b) {
	return a + b;
}

console.log(sumNumbers(34, 76));

//3
console.log('Задание 3');

function addDiv(a, b, c) {
	return ((a - b)/c);
}

console.log(addDiv(56,34,2));

//4
console.log('Задание 4');

let array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

function dayOfWeek(number, array) {
	number -= 1;
	for (let i = 0; i < array.length; i++) {
		if (i == number) {
			return array[i];
		}
	}
}

console.log(dayOfWeek(3, array));