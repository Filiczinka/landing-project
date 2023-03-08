const titleElement = document.querySelector('.header__change-title');
const words = ['Extensive', 'Adjective', 'Complete'];

let currentIndex = 0;


setInterval() => {
  titleElement.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}, 2000);

setInterval(changeTitle, 2000);

const synonyms = ['TASTY', 'YUMMY', 'SPICY'];
const headerBannerSynonyms = document.querySelector('.header__banner-synonyms');
let currentIndex = 0;