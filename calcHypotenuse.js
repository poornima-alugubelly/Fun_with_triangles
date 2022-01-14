const firstAngle = document.querySelector("#firstAngle");
const secondAngle = document.querySelector("#secondAngle");
const check = document.querySelector(".check");
const output = document.querySelector(".output");

function calculate(a, b) {
	output.style.display = "block";
	const c = Math.sqrt(a * a + b * b).toFixed(2);
	output.innerText = `Length of hypotenuse is ${c}`;
}

function checkInput() {
	output.style.display = "block";
	const a = Number(firstAngle.value);
	const b = Number(secondAngle.value);
	if (a === "" || b === "") {
		output.innerText = "Please enter both the values";
	} else if (a < 0.00001 || b < 0.00001) {
		output.innerText = "The minimum value accepted is 0.00001";
	} else {
		calculate(a, b);
	}
}
check.addEventListener("click", checkInput);

