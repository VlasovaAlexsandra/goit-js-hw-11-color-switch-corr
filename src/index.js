import './styles.css';

const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');
const bodyRef = document.querySelector('body');
let timerId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log((document.body.style.backgroundColor = color));

    startBtn.disabled = true;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  startBtn.disabled = false;
  clearInterval(timerId);
  document.body.style.background = '';
});
