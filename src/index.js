// setTimeout() - виконує код ОДИН раз через вказаний час
// setTimeout(
//   (a) => {
//     console.log("Test setTimeout", a);
//     console.log(a);
//   },
//   500,
//   "argument"
// );

// const x = 2;
// console.log(x);
// const y = 5;
// console.log(y);

// setTimeout(() => {
//   console.log("Другий setTimeout");
// }, 2500);

// В КОДІ ПЕРШИМ ЗАВЖДИ ВИКОНУЄТЬСЯ СИНХРОННИЙ КОД, А ПІСЛЯ СИНХРОННОГО - АСИНХРОННИЙ
// ЯКЩО Є КІЛЬКА АСИНХРОННИХ ОПЕРАЦІЙ, ТО ВОНИ ВИКОНАЮТЬСЯ В ПОРЯДКУ "ХТО ПЕРШИЙ СПРАЦЮВАВ"

// setInterval() - повторює виконання коду через вказаний час
// let count = 0;
// const id = setInterval(() => {
//   count += 1;
//   console.log(`Пройшло: ${count}`);

//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 1000);

// У наведеному нижче коді заплановано виклик setTimeout,
// потім виконується важкий розрахунок, на виконання якого потрібно більше 100 мс.
// Коли запуститься запланована функція?
// Що виведе alert?

// let num = 0;
// setTimeout(() => alert(num), 100); // ?

// for (let i = 0; i < 100000000; i += 1) {
//   num += 1;
// }
// Відповідь: після циклу. Alert виведе результат циклу (100000000)


// Завдання "Лічильник": Створіть лічильник, який збільшується на одиницю кожну секунду.
// Виводьте значення лічильника на сторінці.
const startBtn = document.querySelector(".startBtn");
const endBtn = document.querySelector(".endBtn");
const counterBlock = document.querySelector(".counter-block");

let timer;
let total = 0;

startBtn.addEventListener("click", () => {
  total = 0;
  timer = setInterval(() => {
    total += 1;
    counterBlock.innerHTML = total;
  }, 1000);
});

endBtn.addEventListener("click", () => {
  clearInterval(timer);
});


// Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди.
// Використовуйте setInterval для зміни кольору.
const colorBlock = document.querySelector(".color-block");

setInterval(() => {
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  colorBlock.style.backgroundColor = color;
}, 3000);


// Завдання "Затримка повідомлення": Створіть функцію, яка приймає текстове повідомлення та
// затримує його виведення на сторінку на певний час, використовуючи setTimeout.
const textBlock = document.querySelector(".text-block");
function textMessage(message) {
  setTimeout(() => {
    textBlock.innerHTML = message;
  }, 4000);
}

textMessage("Hello Everyone!");


// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
const numberBlock = document.querySelector(".number-block");

// 1. Використовуючи setInterval.
// function printNumbers(from, to) {
//   let current = from;
//   const id = setInterval(() => {
//     numberBlock.innerHTML = current;
//     if (current === to) {
//       clearInterval(id);
//     }
//     current += 1;
//   }, 1000);
// }
// printNumbers(5, 10);

// 2. Використовуючи вкладений setTimeout.
function printNumbers(from, to) {
  numberBlock.innerHTML = from;
  if (from < to) {
    setTimeout(() => {
      printNumbers(from + 1, to);
    }, 1000);
  }
}

printNumbers(10, 20);


// Завдання "Зміна стилів": Створіть блок, який змінює свої стилі
// (наприклад, фоновий колір, розмір шрифту) через певний час.
// Використовуйте setTimeout для зміни стилів блоку.
const styleBlock = document.querySelector(".style-block");

setTimeout(() => {
  const backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  styleBlock.style.backgroundColor = backgroundColor;

  const fontSize = Math.floor(Math.random() * (32 - 16 + 1)) + 16;
  styleBlock.style.fontSize = fontSize + "px";
}, 5000);


// Завдання "Переключення слайдів": Створіть галерею слайдів,
// яка автоматично перемикається на наступний слайд через певний інтервал, використовуючи setTimeout.
const slides = document.querySelectorAll(".slide");
let index = 0;
slides[0].classList.add("active");

function changeSlide() {
  slides[index].classList.remove("active");
  index += 1;

  if (index === slides.length) {
    index = 0;
  }

  slides[index].classList.add("active");

  setTimeout(changeSlide, 3500);
}

setTimeout(changeSlide, 3500);


// Завдання "Зміна розміру": Створіть блок, який змінює свій розмір кожні 4 секунди.
// Використовуйте setInterval для зміни ширини та висоти блоку.
const sizeBlock = document.querySelector(".size-block");

setInterval(() => {
  const width = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
  sizeBlock.style.width = width + "px";

  const height = Math.floor(Math.random() * (450 - 100 + 1)) + 100;
  sizeBlock.style.height = height + "px";
}, 4000);
