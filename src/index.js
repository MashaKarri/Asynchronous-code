// setTimeout() - виконує код ОДИН раз через вказаний час
setTimeout(
  (a) => {
    console.log("Test setTimeout", a);
    console.log(a);
  },
  500,
  "argument"
);

const x = 2;
console.log(x);
const y = 5;
console.log(y);

setTimeout(() => {
  console.log("Другий setTimeout");
}, 2500);

// В КОДІ ПЕРШИМ ЗАВЖДИ ВИКОНУЄТЬСЯ СИНХРОННИЙ КОД, А ПІСЛЯ СИНХРОННОГО - АСИНХРОННИЙ
// ЯКЩО Є КІЛЬКА АСИНХРОННИХ ОПЕРАЦІЙ, ТО ВОНИ ВИКОНАЮТЬСЯ В ПОРЯДКУ "ХТО ПЕРШИЙ СПРАЦЮВАВ"

// setInterval() - повторює виконання коду через вказаний час
let count = 0;
const id = setInterval(() => {
  count += 1;
  console.log(`Пройшло: ${count}`);

  if (count === 5) {
    clearInterval(id);
  }
}, 1000);


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
