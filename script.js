// document.addEventListener("DOMContentLoaded", function () {
// 	const headerNav = document.querySelector(".header-nav");
// 	const headerNavList = document.querySelector(".header-nav__list");
// 	const headerSocialsList = document.querySelector(".header-socials__list");

// 	// Create hamburger menu button
// 	const hamburger = document.createElement("div");
// 	hamburger.classList.add("hamburger");
// 	hamburger.innerHTML = "&#9776;";
// 	headerNav.appendChild(hamburger);

// 	// Create overlay
// 	const overlay = document.createElement("div");
// 	overlay.classList.add("overlay-menu");
// 	document.body.appendChild(overlay);

// 	// Clone and add nav links to overlay
// 	const overlayNavList = headerNavList.cloneNode(true);
// 	overlayNavList.classList.add("overlay-nav__list");
// 	overlay.appendChild(overlayNavList);

// 	// Add socials to overlay
// 	const overlaySocialsList = headerSocialsList.cloneNode(true);
// 	overlaySocialsList.classList.add("overlay-socials__list");
// 	overlay.appendChild(overlaySocialsList);

// 	// Toggle overlay visibility
// 	hamburger.addEventListener("click", function () {
// 		overlay.classList.toggle("active");
// 	});
// });
