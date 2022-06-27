let burger = document.querySelector(".burger")
let nav = document.querySelector(".nav")
let header = document.querySelector(".header")
let tabBody = document.querySelectorAll(".tabs-body__item")
let tabHeader = document.querySelectorAll(".tabs-header__item")

// Open nav on click to "Burger"
burger.addEventListener("click", () => {
	burger.classList.toggle("burger_active")
	nav.classList.toggle("nav_active")
})

// Manipulations with "Header" classes on scroll
let scrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
	scrollPosition = window.scrollY;

	if (scrollPosition >= 30) {
		header.classList.add("header_scroll_down");
	} else {
		header.classList.remove("header_scroll_down");
	}
});

window.onload = function () {
	if (scrollPosition >= 30) {
		header.classList.add("header_scroll_down");
	}
};

// Tabs
for (let i = 0; i < tabHeader.length; i++) {
	tabHeader[i].addEventListener("click", () => {

		tabBody.forEach((item) => {
			item.classList.remove("tabs-body__item_active");
		});

		tabHeader.forEach((item) => {
			item.classList.remove("tabs-header__item_active");
		});

		tabBody[i].classList.add("tabs-body__item_active");
		tabHeader[i].classList.add("tabs-header__item_active");

	});
}

// Wallet slider
const walletSlider = new Swiper(".wallet-slider", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide : 1,
	coverflowEffect: {
		rotate: 30,
		stretch: 190,
		depth: 300,
		modifier: 1,
		slideShadows: false,
	},
	navigation: {
		nextEl: ".wallet-button-next",
		prevEl: ".wallet-button-prev",
	},
	breakpoints: {
		576: {
			coverflowEffect: {
				stretch: 272,
			},
		},
		1440: {
			coverflowEffect: {
				stretch: 450,
			},
		},
	}
})

// Media 768px =====>
if (window.matchMedia("(min-width: 768px)").matches) {
	// Append images in container for desktop resolution
	let appendContainers = document.querySelectorAll(".append-container");
	appendContainers.forEach(function (appendContainer) {
		let appendItem = appendContainer.querySelector(".append-item");
		appendContainer.append(appendItem);
	});

	// Dropdown"s
	let dropdowns = document.querySelectorAll(".dropdown")

	dropdowns.forEach(dropdown => {
		dropdown.addEventListener("mouseover", () => {
			dropdown.classList.add("dropdown_active")
			header.classList.add("header_dropdown_open")
		})
		dropdown.addEventListener("mouseleave", () => {
			dropdown.classList.remove("dropdown_active")
			header.classList.remove("header_dropdown_open")
		})
	})
} else {
	null;
}