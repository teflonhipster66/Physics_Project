function checkAnswer(questionNumber, correctAnswer) {
    let userAnswer;
    if (typeof correctAnswer === 'number') {
        userAnswer = parseFloat(document.getElementById('q' + questionNumber).value);
    } else {
        userAnswer = document.getElementById('q' + questionNumber).value;
    }
    const resultSpan = document.getElementById('result' + questionNumber);

    if (userAnswer === correctAnswer) {
        resultSpan.className = 'correct';
        resultSpan.textContent = 'Correct! The letter is: ' + "INDUCTANCE"[questionNumber - 1];
        resultSpan.style.display = 'block';
    } else {
        resultSpan.className = 'incorrect';
        resultSpan.textContent = 'Incorrect, try again.';
        resultSpan.style.display = 'block';
    }
}
