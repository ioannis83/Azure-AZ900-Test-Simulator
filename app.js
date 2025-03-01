let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let answeredQuestions = new Array(questions.length).fill(false);
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const progressBar = document.getElementById('progress');
const questionNumber = document.getElementById('question-number');
const scoreContainer = document.getElementById('score-container');

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function showQuestion(question) {
    const isAnswered = answeredQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="answers">
            ${question.answers.map((answer, index) => `
                <label class="answer ${getAnswerClasses(index)}">
                    <input type="radio" name="question" value="${index}" 
                        ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}
                        ${isAnswered ? 'disabled' : ''}>
                    ${answer.text}
                </label>
            `).join('')}
        </div>
        ${!isAnswered ? '<button id="submit-answer" class="submit-button">Answer</button>' : ''}
    `;

    // Add event listeners to radio buttons
    const radioButtons = questionContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', () => selectAnswer(index));
    });

    // Add event listener to submit button if not answered
    if (!isAnswered) {
        const submitButton = questionContainer.querySelector('#submit-answer');
        submitButton.addEventListener('click', submitAnswer);
    }

    updateProgress();
    updateNavigationButtons();
}

function getAnswerClasses(index) {
    if (!answeredQuestions[currentQuestionIndex]) return '';
    
    const question = questions[currentQuestionIndex];
    const isSelected = userAnswers[currentQuestionIndex] === index;
    const isCorrect = question.answers[index].correct;
    
    if (isSelected) {
        return isCorrect ? 'selected correct' : 'selected incorrect';
    }
    return isCorrect ? 'correct' : '';
}

function selectAnswer(index) {
    if (answeredQuestions[currentQuestionIndex]) return;
    userAnswers[currentQuestionIndex] = index;
    const answers = questionContainer.querySelectorAll('.answer');
    answers.forEach(answer => answer.classList.remove('selected'));
    answers[index].classList.add('selected');
}

function submitAnswer() {
    if (userAnswers[currentQuestionIndex] === null) return;
    
    answeredQuestions[currentQuestionIndex] = true;
    const question = questions[currentQuestionIndex];
    const answers = questionContainer.querySelectorAll('.answer');
    const selectedIndex = userAnswers[currentQuestionIndex];
    
    answers.forEach((answer, i) => {
        const isCorrect = question.answers[i].correct;
        if (i === selectedIndex) {
            answer.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect) {
            answer.classList.add('correct');
        }
    });
    
    // Disable radio buttons and remove submit button
    const radioButtons = questionContainer.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.disabled = true);
    document.getElementById('submit-answer').remove();
    
    // Enable next button
    nextButton.disabled = false;
}

function updateNavigationButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = !answeredQuestions[currentQuestionIndex];
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(questions[currentQuestionIndex]);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else if (currentQuestionIndex === questions.length - 1) {
        showResults();
    }
}

function showResults() {
    score = calculateScore();
    questionContainer.style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    scoreContainer.classList.remove('hidden');
    document.getElementById('final-score').textContent = Math.round(score * 100);
}

function calculateScore() {
    let correct = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] !== null && questions[i].answers[userAnswers[i]].correct) {
            correct++;
        }
    }
    return correct / questions.length;
}

function restartTest() {
    currentQuestionIndex = 0;
    userAnswers = new Array(questions.length).fill(null);
    answeredQuestions = new Array(questions.length).fill(false);
    score = 0;
    questionContainer.style.display = 'block';
    document.querySelector('.button-container').style.display = 'flex';
    scoreContainer.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

// Initialize the first question
showQuestion(questions[currentQuestionIndex]);