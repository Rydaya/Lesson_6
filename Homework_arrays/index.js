//1 
console.log('Задание 1');

let array1 = [2,5,9,15,0,4];
let filterArray1 = [];

for (let item of array1) {
	if(item > 3 && item < 10) {
		filterArray1.push(item);
	}
}

console.log(filterArray1);

//2
console.log('Задание 2');

let array2 = [2,-5,9,15,0,-4,18];
let sum = 0;

for (let item of array2) {
	if(item > 0) {
		sum += item;
	}
}

console.log(sum);

//3 
console.log('Задание 3');

let array3 = [1,2,5,9,4,13,4,10];

for (let item of array3) {
	if(item == 4) {
		console.log('Есть!');
		break;
	}
}

//4 
console.log('Задание 4');

let array4 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < array4.length; i++) {
	let num = String(array4[i])
  	let char = num[0];
	if(char == 1 || char == 2 || char == 5) {
		console.log(array4[i]);
	}
}

//5
console.log('Задание 5');

let array5 = [1,2,3,4,5,6,7,8,9];
let resultSum = '-';

for (let i = 0; i < array5.length; i++) {
	resultSum += (array5[i] + '-');
}
console.log(resultSum);

//6
document.write('Задание 6' + '</br>');

let array6 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for(let key of array6) {
  if(key =='Sunday' || key =='Saturday') {
    key = '<strong>' + key + '</strong><br>';
  } else {
    key = key + '<br>';
  }
  
  document.write(key);
}
document.write('</br>');

//7
document.write('Задание 7' + '</br>');
let day = prompt('What day of the week is it?');

let array7 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getWeekend(day, array7) {
	for(let key of array7) {
		if(key == day){
			key = '<i>' + day + '</i><br>';
		} else {
			key = key + '<br>';
		}
		document.write(key);
	}
}
document.write(getWeekend(day, array7));

//8 
console.log('Задание 8');

let n = 1000;

function divideN (n) {
	let num = 0
	for(num; num < n; num++) {
		if(n > 50) {
			n /= 2;
		}
	}
	let result = `n = ${n}, num = ${num}`;
	return result;
}

console.log(divideN (n));






  