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
const container = document.querySelector(".container");

let timer;
let total = 0;

startBtn.addEventListener("click", () => {
  total = 0;
  timer = setInterval(() => {
    total += 1;
    container.innerHTML = total;
  }, 1000);
});

endBtn.addEventListener("click", () => {
  clearInterval(timer);
});


// Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий колір кожні 3 секунди.
// Використовуйте setInterval для зміни кольору.
const block = document.querySelector(".block");

setInterval(() => {
  const color = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
  block.style.backgroundColor = color;
}, 3000);


// Завдання "Затримка повідомлення": Створіть функцію, яка приймає текстове повідомлення та
// затримує його виведення на сторінку на певний час, використовуючи setTimeout.
const area = document.querySelector(".area");
function textMessage(message) {
  setTimeout(() => {
    area.innerHTML = message;
  }, 4000);
}

textMessage("Hello Everyone!");