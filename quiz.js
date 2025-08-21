// quiz.js - updated to record and save wrong answers properly

const currentSubject = localStorage.getItem("quizSubject");
const allQuestions = questions[currentSubject];

let currentQuestionIndex = 0; // zero-based index
let score = 0;
let correctCount = 0;
let timeLeft = 30; // Reduced time for the quiz
let timerInterval;
let usedQuestions = { easy: [], medium: [], hard: [] };

const quizInner = document.getElementById("quizInner");
const timerDisplay = document.getElementById("timer");

function startQuiz() {
  // Clear previous wrong answers at the start of a new quiz
  localStorage.removeItem("quizWrongAnswers");

  const faces = quizInner.querySelectorAll('.face');
  loadQuestionContent(faces[0], getQuestion(), 1);
  loadQuestionContent(faces[1], getQuestion(), 2);
  currentQuestionIndex = 1; // Start at 1 for the first question
  faces[0].className = 'face card-middle';
  faces[1].className = 'face card-behind';
  faces[1].style.transform = 'translateX(110%)';
  startTimer();
  // For consistent animation, set a flag to indicate first question
  window.__quizFirstTransition = true;
}

function loadQuestionContent(cardElem, questionObj, questionNumber) {
  if (!questionObj) {
    cardElem.innerHTML = '';
    return;
  }
  cardElem.innerHTML = `
    <h1>Quiz Time</h1>
    <div class="question-text">Q:${questionNumber} - ${questionObj.question}</div>
    <div class="options"></div>
  `;
  const optsContainer = cardElem.querySelector(".options");
  questionObj.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx, questionObj.answer, questionObj);
    optsContainer.appendChild(btn);
  });
}

function getQuestion() {
  let level = "easy";
  if (correctCount >= 7) {
    level = "hard";
  } else if (correctCount >= 3) {
    level = "medium";
  }
  let pool = allQuestions[level].filter(
    q => !usedQuestions[level].includes(q.question)
  );
  if (pool.length === 0) {
    for (let lvl of ["easy", "medium", "hard"]) {
      pool = allQuestions[lvl].filter(
        q => !usedQuestions[lvl].includes(q.question)
      );
      if (pool.length > 0) {
        level = lvl;
        break;
      }
    }
  }
  if (pool.length === 0) return null;
  const randomQ = pool[Math.floor(Math.random() * pool.length)];
  usedQuestions[level].push(randomQ.question);
  return randomQ;
}

function selectAnswer(optionIndex, correctIndex, currentQuestionObj) {
  if (optionIndex === correctIndex) {
    score++;
    correctCount++;
  } else {
    let wrongs = JSON.parse(localStorage.getItem("quizWrongAnswers") || "[]");
    if (!wrongs.some(w => w.question === currentQuestionObj.question)) {
      wrongs.push({
        question: currentQuestionObj.question,
        correctAnswer: currentQuestionObj.options[correctIndex]
      });
      localStorage.setItem("quizWrongAnswers", JSON.stringify(wrongs));
    }
  }
  if (currentQuestionIndex < 10) {
    // For the first transition (Q1 to Q2), trigger swapCards after a short delay to allow animation
    if (window.__quizFirstTransition) {
      window.__quizFirstTransition = false;
      swapCards();
    } else {
      swapCards();
    }
    currentQuestionIndex++;
  } else {
    endQuiz();
  }
}

function swapCards() {
  const middle = quizInner.querySelector('.card-middle');
  const behind = quizInner.querySelector('.card-behind');

  middle.classList.add('animate-left');
  behind.classList.add('animate-in');

  setTimeout(() => {
    middle.className = 'face card-behind';
    behind.className = 'face card-middle';

    const nextQ = getQuestion();
    if (nextQ !== null) {
      loadQuestionContent(middle, nextQ, currentQuestionIndex + 1);
    } else {
      loadQuestionContent(middle, null, null);
    }
    middle.style.transform = 'translateX(110%)';
    behind.style.transform = 'translateX(0)';
  }, 400);
}

function startTimer() {
  timerDisplay.textContent = `00:${timeLeft.toString().padStart(2, "0")}s`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `00:${timeLeft.toString().padStart(2, "0")}s`;
    if (timeLeft <= 10) {
      timerDisplay.classList.add("blinking");
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  localStorage.setItem("quizScore", `${score}/10`);
  window.location.href = "results.html";
}

// Updated skipQuestion function to animate and record as wrong
function skipQuestion() {
  // Get the current question object
  let level = "easy";
  if (correctCount >= 7) {
    level = "hard";
  } else if (correctCount >= 3) {
    level = "medium";
  }
  // Find the last used question for the current level
  let lastQ = usedQuestions[level][usedQuestions[level].length - 1];
  let currentQObj = null;
  for (let q of questions[currentSubject][level]) {
    if (q.question === lastQ) {
      currentQObj = q;
      break;
    }
  }
  // Mark as wrong/skipped in localStorage
  if (currentQObj) {
    let wrongs = JSON.parse(localStorage.getItem("quizWrongAnswers") || "[]");
    if (!wrongs.some(w => w.question === currentQObj.question)) {
      wrongs.push({
        question: currentQObj.question,
        correctAnswer: currentQObj.options[currentQObj.answer]
      });
      localStorage.setItem("quizWrongAnswers", JSON.stringify(wrongs));
    }
  }
  // Animate to next question (same as answering)
  if (currentQuestionIndex < 10) {
    if (window.__quizFirstTransition) {
      window.__quizFirstTransition = false;
      swapCards();
    } else {
      swapCards();
    }
    currentQuestionIndex++;
  } else {
    endQuiz();
  }
}

startQuiz();
