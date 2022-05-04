console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const mainWrapper = document.querySelector("#main");
const contentWrapper = document.querySelector(".content");
const leistungTrigger = document.querySelector(".leistung-trigger");
const grasLeft = document.querySelector(".gras-left");
const grasRight = document.querySelector(".gras-right");
const hand = document.querySelector(".hand");

leistungTrigger.addEventListener("mouseover", () => {
	let open = mainWrapper.classList.contains("open");

	if (!open) {
		grasLeft.classList.add("-translate-x-12");
		hand.classList.add("opacity-100");
		hand.classList.add("translate-x-16");
	}
});
leistungTrigger.addEventListener("mouseout", () => {
	grasLeft.classList.remove("-translate-x-12");
	hand.classList.remove("opacity-100");
	hand.classList.remove("translate-x-16");
});

leistungTrigger.addEventListener("click", (e) => {
	localStorage.setItem("open", "true");
	const is_root = location.pathname == "/";
	if (is_root) {
		localStorage.setItem("isRoot", "true");
	} else {
		localStorage.setItem("isRoot", "false");
	}

	// e.preventDefault();
	// mainWrapper.classList.add("open");
	// grasLeft.classList.remove("-translate-x-12");
	// grasLeft.classList.add("left-[0%]");
	// grasLeft.classList.add("w-[10%]");
	// grasRight.classList.add("right-[0%]");
	// grasRight.classList.add("w-[10%]");
	// hand.classList.remove("opacity-100");
	// hand.classList.remove("translate-x-16");
});

setTimeout(() => {
	if (localStorage.getItem("open") == "true") {
		contentWrapper.classList.add("open");
	}
}, 1);
