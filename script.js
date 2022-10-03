/* Romeo 10/03/22 */
function bg_scroll() {
	
	let cbg = document.getElementById("cbg");
	let trigger = document.getElementById("front_logo");
	
	let windowHeight = window.innerHeight;
	
	let elementTop = trigger.getBoundingClientRect().top;
	
	let mark1 = -80;
	if (elementTop < mark1) {
		cbg.classList.add("bg_view2");
		cbg.classList.remove("bg_view1");
	} else {
		cbg.classList.add("bg_view1");
		cbg.classList.remove("bg_view2");
	}
}

window.addEventListener("scroll", bg_scroll);

