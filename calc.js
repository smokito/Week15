const numberOne = document.querySelector("#firstNumber");
const numberTwo = document.querySelector("#secondNumber");
const result = document.querySelector("#result");
const div = document.createElement("div");

function addNumbers() {
  const first = numberOne.value;
  const second = numberTwo.value;

  let sum = +first + +second;
  div.innerHTML = sum;
  result.append(div);
  numberOne.value = "";
  numberTwo.value = "";
}
function subtractNumbers() {
  const first = numberOne.value;
  const second = numberTwo.value;
  let subtract = +first - +second;
  div.innerHTML = subtract;
  result.append(div);
  numberOne.value = "";
  numberTwo.value = "";
}

function multiplyNumbers() {
  const first = numberOne.value;
  const second = numberTwo.value;
  let multiply = +first * +second;
  div.innerHTML = multiply;
  result.append(div);
  numberOne.value = "";
  numberTwo.value = "";
}

function divideNumbers() {
  const first = numberOne.value;
  const second = numberTwo.value;
  if (second == "0") {
    alert("You cannot divide by zero");
    numberOne.value = "";
    numberTwo.value = "";
  } else {
    let divide = +first / +second;
    div.innerHTML = divide;
    result.append(div);
    numberOne.value = "";
    numberTwo.value = "";
  }
}
