const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const regexText = /[^\d]/g

const createTimerAnimator = () => {
  return (totalSeconds) => {
    const hour = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - hour * 3600) / 60);
    const seconds = Math.floor((totalSeconds - hour * 3600) - minutes * 60);
    timerEl.textContent = `${hour < 10 ? 0 : ''}${hour}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(regexText, '');
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);

  const myInterval = setInterval(() => {
    animateTimer(seconds);
    if (seconds > 0) {
      seconds -= 1;
    } else {
      clearInterval(myInterval);
    };
  }, 1000);


  inputEl.value = '';
});
