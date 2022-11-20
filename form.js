const btnRegister = document.querySelector("#btnsend");
const firstname = document.querySelector("#name");
const secondname = document.querySelector("#surname");
const eAdress = document.querySelector("#email");
const telephone = document.querySelector("#tel");
const username = document.querySelector("#user");
const password = document.querySelector("#pass");
const passwordRepeat = document.querySelector("#passrepeat");
var regName = /\d+$/g;

function check() {
  if (firstname.value == "") {
    document.querySelector("#errorMessage").innerHTML += "Введите имя<br>";
  } else if (regName.test(firstname.value)) {
    document.querySelector("#errorMessage").innerHTML +=
      "Имя не должно содержать символы<br>";
  } else if (secondname.value == "") {
    document.querySelector("#errorMessage").innerHTML += "Введите Фамилию<br>";
  } else if (regName.test(secondname.value)) {
    document.querySelector("#errorMessage").innerHTML +=
      "Имя не должно содержать символы<br>";
  } else if (eAdress.value == "") {
    document.querySelector("#errorMessage").innerHTML +=
      "Введите адрес электронной почты <br>";
  } else if (telephone.value == "") {
    document.querySelector("#errorMessage").innerHTML +=
      "Введите номер телефона<br>";
  } else if (isNaN(telephone.value)) {
    document.querySelector("#errorMessage").innerHTML +=
      "введите корректный номер телефона<br>";
  } else if (username.value == "") {
    document.querySelector("#errorMessage").innerHTML += "Введите логин <br>";
  } else if (username.value.length <= 5) {
    document.querySelector("#errorMessage").innerHTML +=
      "Логин должен содержать больше 4 символов<br>";
  } else if (password.value == "") {
    document.querySelector("#errorMessage").innerHTML += "Введите пароль <br>";
  } else if (password.value.length <= 7) {
    document.querySelector("#errorMessage").innerHTML +=
      "Пароль должен содержать более 6 символов <br>";
  } else if (passwordRepeat.value !== password.value) {
    document.querySelector("#errorMessage").innerHTML +=
      "Пароли не совпадают <br>";
  } else {
    alert(`Добро пожаловать,  ${firstname.value} `);
  }
}

btnRegister.addEventListener("click", check);
