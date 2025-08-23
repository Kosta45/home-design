/* Теоритичні питання:
1. В чому полягає відмінність localStorage і sessionStorage?

localStorage сохраняет данные локально на клиенте, данные будут очищены если это сделает сам пользователь. Так же данные доступны между сесиями и вкладками. А sessionStorage хранит данные только во время сесии, то есть пока открыта вкладка и окно бразуера. Если закрыть вкладку то данные очистятся, можно только обновить, перезагрузить вкладку. А так эти оба "хранилища" имеют одинаковые методы, оба хранят данные в виде строки и не отправляют данные на сервер. Зранят данные только на стороне клиента, пользователя.

2. Які аспекти безпеки слід враховувати при збереженні чутливої інформації, такої як паролі, за допомогою localStorage чи sessionStorage?

Данные хранятся в виде JS кода, в виде строки. Эти данные сохранены на стороне пользователя, то есть полностью доступны на странице без защиты. Вредоносный скрипт может сделать все что угодно с доступным JS кодом. Тем более если это localStorage, который дает доступ к данным даже между вкладок.


3. Що відбувається з даними, збереженими в sessionStorage, коли завершується сеанс браузера?

Данные будут очищенны. При заркытии вкладки или окна браузера данные перестанут существовать.

*/

// Практичне завдання:
// Реалізувати можливість зміни колірної теми користувача.
// Технічні вимоги:
// - Взяти готове домашнє завдання HW-4 "Price cards" з блоку Basic HMTL/CSS.
// - Додати на макеті кнопку "Змінити тему".
// - При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.
// - Вибрана тема повинна зберігатися після перезавантаження сторінки.
// Примітки:
// - при виконанні завдання перебирати та задавати стилі всім елементам за допомогою js буде вважатись помилкою;
// - зміна інших стилів сторінки, окрім кольорів буде вважатись помилкою.

const switcherBtn = document.querySelector(".header__mode-switcher");
const switcherCircle = document.querySelector(".header__mode-switcher-circle");

// Как и было в условии, я не перебераю все элементы чтобы поменять стил. Код ниже, это работа с моей кастномной кнопкой. Только в этой кнопки, я менял классы. Тут я уже просто сделал на свое усмотрение, сделал кнопку такой, какой я хотел её видеть.

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  switcherBtn.classList.toggle("mode-switcher-dark");
  switcherBtn.classList.toggle("mode-switcher-light");
  switcherCircle.classList.toggle("switcher-circle-dark");
  switcherCircle.classList.toggle("switcher-circle-light");
}

switcherBtn.addEventListener("click", switchTheme);

function switchTheme() {
  switcherBtn.classList.toggle("mode-switcher-dark");
  switcherBtn.classList.toggle("mode-switcher-light");
  switcherCircle.classList.toggle("switcher-circle-dark");
  switcherCircle.classList.toggle("switcher-circle-light");

  if (!document.body.classList.contains("dark")) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.removeItem("theme");
  }
}
