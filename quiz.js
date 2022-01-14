const quizForm = document.querySelector("#quiz_form");
const output = document.querySelector(".output");

const answers = ["Yes", "5cm", "Scalene", "30°"];
function evaluate() {
	output.style.display = "block";
	let score = 0;
	let index = 0;
	const formResults = new FormData(quizForm);
	for (let value of formResults.values()) {
		if (value === answers[index]) {
			score++;
		}
		index++;
	}

	output.innerText = `Your score is ${score}`;
}
quizForm.addEventListener("submit", evaluate);
