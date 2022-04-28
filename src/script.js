const range = document.querySelectorAll('.range-slider input');
const progress = document.querySelector('.range-slider .progress');
const gap = 1000;
const inputValue = document.querySelectorAll('.numberVal input');

range.forEach((input) => {
  input.addEventListener('input', (e) => {
    const minrange = range[0].value;
    const maxrange = range[1].value;

    if (maxrange - minrange < gap) {
      if (e.target.className === 'range-min') {
        range[0].value = maxrange - gap;
      } else {
        range[1].value = minrange + gap;
      }
    } else {
      progress.style.left = `${(minrange / range[0].max) * 100}%`;
      progress.style.right = `${100 - (maxrange / range[1].max) * 100}%`;
      inputValue[0].value = minrange;
      inputValue[1].value = maxrange;
    }
  });
});
