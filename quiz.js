var quizForm = document.querySelector("#quiz_form");
var output = document.querySelector(".output");

var answers = ["Yes", "5cm", "Scalene", "30°"];
function evaluate() {
	output.style.display = "block";
	var score = 0;
	var index = 0;
	var formResults = new FormData(quizForm);
	for (let value of formResults.values()) {
		if (value === answers[index]) {
			score++;
		}
		index++;
	}

	output.innerText = `Your score is ${score}`;
}
quizForm.addEventListener("submit", evaluate);
