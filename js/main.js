const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')

navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--active')

	let delayTime = 0

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = `0.${delayTime++}s`
	})
})

navItems.forEach(e =>
	e.addEventListener('click', () => {
		nav.classList.remove('nav--active')
	})
)
