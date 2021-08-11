var firstAngle = document.querySelector("#firstAngle");
var secondAngle = document.querySelector("#secondAngle");
var check = document.querySelector(".check");
var output = document.querySelector(".output");

function calculate(b, h) {
	output.style.display = "block";
	var b = Number(firstAngle.value);
	var h = Number(secondAngle.value);
	var c = 0.5 * b * h;
	c = c.toFixed(3);
	output.innerHTML = `Area of the triangle is  ${c}`;
}

function checkInput() {
	output.style.display = "block";
	var a = Number(firstAngle.value);
	var b = Number(secondAngle.value);
	if (a == "" || b == "") {
		output.innerText = "Please enter both the values";
	} else if (a < 0.00001 || b < 0.00001) {
		output.innerText = "The minimum value accepted is 0.00001";
	} else {
		calculate(a, b);
	}
}
check.addEventListener("click", checkInput);
