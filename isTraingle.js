const input = document.querySelectorAll(".angle-input");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function checkTraingle(angle1, angle2, angle3) {
	output.style.display = "block";
	const sum_angle = angle1 + angle2 + angle3;

	if (sum_angle === 180) {
		output.innerText = "Yes it is a traingle";
	} else {
		output.innerText = "No is it not a traingle";
	}
}

function checkInput() {
	output.style.display = "block";
	const angle1 = Number(input[0].value);
	const angle2 = Number(input[1].value);
	const angle3 = Number(input[2].value);
	if (angle1 === "" || angle2 === "" || angle3 === "") {
		output.innerText = "Please enter all the values";
	} else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
		output.innerText = "Please enter positive values";
	} else {
		checkTraingle(angle1, angle2, angle3);
	}
}
check.addEventListener("click", checkInput);
