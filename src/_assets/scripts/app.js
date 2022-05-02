console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const leistungTrigger = document.querySelector(".leistung-trigger");
const gras = document.querySelector(".gras");
const hand = document.querySelector(".hand");

leistungTrigger.addEventListener("mouseover", () => {
	gras.classList.add("-translate-x-12");
	hand.classList.add("opacity-100");
	hand.classList.add("translate-x-16");
});
leistungTrigger.addEventListener("mouseout", () => {
	gras.classList.remove("-translate-x-12");
	hand.classList.remove("opacity-100");
	hand.classList.remove("translate-x-16");
});
