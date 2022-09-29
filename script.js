
let namef = document.getElementById("namef");

let names = document.getElementById("names");

let email = document.getElementById("email");

let passone = document.getElementById("passone");

let passtwo = document.getElementById("passtwo");

let yourdate = document.getElementById("yourdate");

let num = new Date();
num.setSeconds(num.getSeconds() - 567648000);

let day = num.getDate();
let month = num.getMonth() + 1;
let year = num.getFullYear();

if (day<10) {
    day = '0'+day;
  }
if (month<10) {
    month = '0'+month;
  }

enterdate = year+'-'+month+'-'+day;

yourdate.addEventListener("click", function () {
  yourdate.type="date";
  yourdate.style.width="303px";
  yourdate.setAttribute("max", enterdate);
});


let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  if (!namef.value.match(namef.pattern)) {
    alert ("Введите своё имя на кириллице.");
  } else {
    if (!names.value.match(names.pattern)) {
      alert ("Введите свою фамилию на кириллице.");
    } else {
      if (!yourdate.value) {
        alert ("Введите свою дату рождения. Обратите внимание, что ваш возраст должен быть не менее 18 лет!");
      } else {
        if (!email.value.match(email.pattern)) {
          alert ("Введите корректный e-mail.");
        } else {
          if (!passone.value.match(passone.pattern)) {
            alert ("Введите пароль. Он должен содержать как минимум одну цифру, одну заглавную и одну строчную буквы и один символ. Минимальная длина пароля - 8 символов.");
          } else {
            if (passone.value!==passtwo.value) {
              alert ("Необходимо повторно ввести пароль. Поля ввода не совпадают.");
            } else {
              alert ("Вы зарегистрированы!");
            }
          }
        }
      }
    }
  }

  });

