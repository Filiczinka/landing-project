const titleElement = document.querySelector('.header__change-title');
const words = ['Extensive', 'Adjective', 'Complete'];

let currentIndex = 0;


function changeTitle() {
  titleElement.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

setInterval(changeTitle, 2000);