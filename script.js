const menu = document.getElementById('desp-menu');

menu.addEventListener("click", () => {
	if(menu.checked) {
		let result = document.getElementById("navigation").style.display = "block";
	}
	else if (screen.width >= 900) {
		let auto = location.reload();
	}
	else {
		let result = document.getElementById("navigation").style.display = "none";
	}
})