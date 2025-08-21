// subject.js

// Load the full question pools from a separate questions.js file
// Make sure questions.js is linked before subject.js in subject.html
// questions.js should export an object: const questionPools = { DMGT: [...], DLCO: [...], ... };

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function selectSubject(subject) {
    // Save chosen subject
    localStorage.setItem("quizSubject", subject);

    // Ensure the subject exists in our question pools
    if (!questionPools[subject] || questionPools[subject].length === 0) {
        alert("No questions found for subject: " + subject);
        return;
    }

    // Take a copy of the 50‑question pool
    let questionsCopy = [...questionPools[subject]];

    // Shuffle for random order each player
    shuffleArray(questionsCopy);

    // Pick 10 questions for this attempt
    let selectedQuestions = questionsCopy.slice(0, 10);

    // Store them for quiz.html
    localStorage.setItem("quizQuestionSet", JSON.stringify(selectedQuestions));

    // Redirect to quiz page
    window.location.href = "quiz.html"; // adjust path if needed
}

// This function should be triggered when a subject button is clicked
// Example in subject.html:
// <button onclick="selectSubject('DMGT')">DMGT</button>
