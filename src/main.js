// swiper

const menu = ["강의", "퀴즈"]

const appSwiper = new Swiper(".swiper-container-appSlide", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
})

const $lecture = document.querySelector(".pagination-lecture")
const $quiz = document.querySelector(".pagination-quiz")
const $prevButton = document.querySelector(".swiper-button-prev")
const $nextButton = document.querySelector(".swiper-button-next")

$prevButton.addEventListener("click", function (e) {
	e.preventDefault()
	appSwiper.slidePrev()
	$lecture.classList.add("selected-page")
	$quiz.classList.remove("selected-page")
})

$nextButton.addEventListener("click", function (e) {
	e.preventDefault()
	appSwiper.slideNext()
	$quiz.classList.add("selected-page")
	$lecture.classList.remove("selected-page")
})

$lecture.addEventListener("click", function (e) {
	e.preventDefault()
	let index_currentSlide = appSwiper.realIndex

	if (index_currentSlide === 1) {
		appSwiper.slideTo(0, 500)
		$lecture.classList.add("selected-page")
		$quiz.classList.remove("selected-page")
	}
})

$quiz.addEventListener("click", function (e) {
	e.preventDefault()
	let index_currentSlide = appSwiper.realIndex

	if (index_currentSlide === 0) {
		appSwiper.slideTo(1, 500)
		$quiz.classList.add("selected-page")
		$lecture.classList.remove("selected-page")
	}
})

const featureSwiper = new Swiper(".swiper-container-featureSlide", {
	slidesPerView: 1,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
})
