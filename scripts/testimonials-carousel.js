(function () {

	const slides = [
		'<div class="testimonials__carousel-slide"><p class="testimonials-lili__text testimonials__carousel-subtitle">I have studied English for years, but still could not reach an acceptable level. I still had the same problems with the articles and the confusion in the times. I decided to try again and signed up for an extensive Lingua School course. After 10 weeks, I spoke reasonably well, and most importantly, I understood the difference between Present Perfect and Past Perfect!</p><p class="testimonials-lili__date testimonials__date">October 28, 2018</p><div class="testimonials-lili__photo testimonials__photo"><img class="testimonials__img testimonials__lili-img" src="images/testimonials-lili.jpg" alt="Girl"></div><h5 class="testimonials-lili__title testimonials__title-name">Lili Fati</h5></div>',
		'<div class="testimonials__carousel-slide"><p class="testimonials-suri__text testimonials__carousel-subtitle">This is a pretty saturated course for those who are serious about	learning	a language. Classes are conducted perfectly, at each lesson, the teachers check the students homework, so there is no way not to do the tasks. Perhaps, not everyone is ready to study 3 times a week for 2 hours, but based on my experience, I can say for sure that this is more effective than regular courses.</p><p class="testimonials-suri__date testimonials__date">February 12, 2019</p><div class="testimonials-suri__photo testimonials__photo"><img class="testimonials__img testimonials__suri-img" src="images/testimonials-suri.jpg" alt="Girl"></div><h5 class="testimonials-suri__title testimonials__title-name">Suri Mhatma</h5></div>',
		'<div class="testimonials__carousel-slide"><p class="testimonials-ramil__text testimonials__carousel-subtitle">I came to courses to improve pronunciation and grammar, but I got a lot more! I stopped being afraid to talk, learned to write correctly, and as a result of the course I got a new job related to the English language! I am sure that the Lingva School certificate played a great role. Many thanks to the school and to the teachers that bring the light of knowledge into the students heads!</p><p class="testimonials-ramil__date testimonials__date">June 23, 2019</p><div class="testimonials-ramil__photo testimonials__photo"><img class="testimonials__img testimonials__ramil-img" src="images/testimonials-ramil.jpg" alt="Man"></div><h5 class="testimonials-ramil__title testimonials__title-name">Ramil Javadi</h5></div>',
		'<div class="testimonials__carousel-slide"><p class="testimonials-pati__text testimonials__carousel-subtitle">If you need quickly and efficiently learn English, there is nothing better than these courses. They are very intense, so for 10 weeks you are completely immersed in the English language. Special thanks to our teachers for not only teaching us grammar and vocabulary, but also introducing us to British and American culture. As a bonus, all former students can continue to attend the speaking club!</p><p class="testiomonials-pati__date testimonials__date">September 28, 2019</p><div class="testimonials-pati__photo testimonials__photo"><img class="testimonials__img testimonials__pati-img" src="images/testimonials-pati.jpg" alt="Man"></div><h5 class="testimonials-pati__title testimonials__title-name">Pati Lahtum</h5></div>'
	];

	let currentSlide = 0;

	function renderSlides(slides) {
		const slidesContainer = document.querySelector('.testimonials-carousel-container');
		slidesContainer.innerHTML = slides[currentSlide];
	}

	function nextSlides() {
		currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
		renderSlides(slides);
	}

	function prevSlide() {
		currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
		renderSlides(slides);
	}

	renderSlides(slides);

	const nextButton = document.querySelector('.testimonials-carousel-next');
	nextButton.addEventListener('click', nextSlides);

	const prevButton = document.querySelector('.testimonials-carousel-prev');
	prevButton.addEventListener('click', prevSlide);

	window.addEventListener('resize', () => {
		renderSlides(slides);
	});
})();