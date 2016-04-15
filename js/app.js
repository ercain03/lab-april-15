function sum(num1, num2) {
  var sumTwoNumbers = num1 + num2;
  console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers);
  var twoNumber = document.getElementById('twoNumber');
  twoNumber.textContent = '"The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers + '."';
}

function multiply(num1, num2) {
  var sumTwoNumbers = num1 * num2;
  console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers);
  var twoNumberMultiply = document.getElementById('twoMultiply');
  twoNumberMultiply.textContent = '"The sum of ' + num1 + ' and ' + num2 + ' is ' + sumTwoNumbers + '."';
}
