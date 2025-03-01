let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.answers.map((answer, index) => `
            <div class="answer" onclick="selectAnswer(${index})">${answer.text}</div>
        `).join('')}
    `;
}

function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    const selectedAnswer = question.answers[index];
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach((element, i) => {
        if (question.answers[i].correct) {
            element.classList.add('correct');
        } else if (i === index) {
            element.classList.add('incorrect');
        }
    });
    if (selectedAnswer.correct) {
        score++;
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<div class="result">Your score: ${score} / ${questions.length}</div>`;
    document.getElementById('next-button').style.display = 'none';
}

showQuestion();
