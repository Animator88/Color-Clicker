let button = document.getElementById('button')
let body = document.querySelector('body')
let click = 0;

function back(clicks, color) {
  if (click == clicks) {
    body.style.backgroundColor = color;
  }
}
button.addEventListener('click', function() {
  click++;
  button.textContent = click;
  back(10, 'red')
  back(30, 'blue')
  back(60, 'green')
  back(100, 'gold')
})