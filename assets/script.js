// Animation for counter
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.counter').forEach(counter => {
    let end = +counter.getAttribute('data-count').replace('k','000');
    let start = 0;
    let step = Math.ceil(end / 100);
    let current = start;
    let interval = setInterval(() => {
      current += step;
      if(current >= end) {
        counter.textContent = counter.getAttribute('data-count');
        clearInterval(interval);
      } else {
        counter.textContent = current;
      }
    }, 20);
  });
});