const words = ['Extensive', 'Adjective', 'Complete'];
const titleElement = document.querySelector('.header__change-title');

let currentIndex = 0;

setInterval(() => {
  titleElement.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}, 2000);