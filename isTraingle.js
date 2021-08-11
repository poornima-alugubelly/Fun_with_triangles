var input = document.querySelectorAll(".angle-input");
var check = document.querySelector(".check");
var output = document.querySelector(".output");

function checkTraingle(angle1, angle2, angle3) {
	output.style.display = "block";
	var sum_angle = angle1 + angle2 + angle3;

	if (sum_angle === 180) {
		output.innerText = "Yes it is a traingle";
	} else {
		output.innerText = "No is it not a traingle";
	}
}

function checkInput() {
	output.style.display = "block";
	var angle1 = Number(input[0].value);
	var angle2 = Number(input[1].value);
	var angle3 = Number(input[2].value);
	if (angle1 == "" || angle2 == "" || angle3 == "") {
		output.innerText = "Please enter all the values";
	} else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
		output.innerText = "Please enter positive values";
	} else {
		checkTraingle(angle1, angle2, angle3);
	}
}
check.addEventListener("click", checkInput);
