const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav__item')

navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--active')
})

navItems.forEach(e =>
	e.addEventListener('click', () => {
		nav.classList.remove('nav--active')
	})
)
