const titleElement = document.querySelector('.header__change-title');
const words = ['Extensive', 'Adjective', 'Complete'];

let currentIndex = 0;

setInterval(() => {
  titleElement.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}, 2000);