function sum(num1, num2) {
  var sumTwoNumbers = num1 + num2;
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers);
  var twoNumber = document.getElementById('twoNumber');
  twoNumber.textContent = '"The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers + '."';
  return sumTwoNumbers;
}

function multiply(num1, num2) {
  var sumTwoNumbers = num1 * num2;
  //console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers);
  var twoNumberMultiply = document.getElementById('twoMultiply');
  twoNumberMultiply.textContent = '"The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers + '."';
  return sumTwoNumbers;
}

function sumAndMultiply(num1, num2, num3) {
  var myArray = [];
  myArray.push(sum(sum(num1, num2), num3));
  myArray.push(multiply(multiply(num1, num2), num3));

  //No need to keep the console.logs anymore
  //console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + myArray[0]);
  //console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of: ' + myArray[1]);

  var twoNumberSums = document.getElementById('twoSums');
  twoNumberSums.textContent = '"' + num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + myArray[0] + '"';

  var twoNumberMulty = document.getElementById('twoMulty');
  twoNumberMulty.textContent = '"The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of: ' + myArray[1] + '"';

  return myArray;
}

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  var arrNumbers = document.getElementById('arrNum');
  arrNumbers.textContent = '"' + arr + ' was passed in as an array of numbers, and ' + sum + ' is their sum."';
  //console.log('"' + arr + ' was passed in as an array of numbers, and ' + sum + ' is their sum."');
  console.table(arr);
  return sum;
}

function multiplyArray(arr){
  var sum = 1;
  for (var i = 0; i < arr.length; i++){
    sum *= arr[i];
  }
  var arrNumbersMultiply = document.getElementById('arrNumMulti');
  arrNumbersMultiply.textContent = '"The numbers ' + arr + ' have a product of ' + sum + ' "';

  //console.log('"The numbers ' + arr + ' have a product of ' + sum + ' "');
  console.table(arr);

  return sum;
}
