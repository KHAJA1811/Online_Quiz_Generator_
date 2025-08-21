// Redirect if no session data
if (!sessionStorage.getItem("playerName")) {
    window.location.href = "registration.html";
}

const playerName = sessionStorage.getItem("playerName");
const score = parseInt(sessionStorage.getItem("quizScore"), 10);
const total = parseInt(sessionStorage.getItem("quizTotal"), 10);
const answers = JSON.parse(sessionStorage.getItem("quizAnswers"));

// Calculate percentage
const percentage = Math.round((score / total) * 100);

// Performance message
let message = "";
if (percentage === 100) {
    message = "🌟 Perfect! Outstanding performance!";
} else if (percentage >= 80) {
    message = "✅ Excellent job!";
} else if (percentage >= 50) {
    message = "👍 Good effort, keep practicing!";
} else {
    message = "💪 Don't give up! Try again!";
}

// Display
document.getElementById("score").innerHTML =
    `${playerName}, you scored <strong>${score}</strong> out of <strong>${total}</strong> 
    (${percentage}%).<br><em>${message}</em>`;

// === Circular progress animation ===
const progressCircle = document.getElementById("progress");
const percentageText = document.getElementById("percentageText");
const circumference = 2 * Math.PI * 54; // r = 54
let offset = circumference - (percentage / 100) * circumference;
progressCircle.style.strokeDashoffset = offset;
percentageText.textContent = percentage + "%";

// Question-by-question review
const reviewDiv = document.getElementById("review");
let hasMistakes = false;
answers.forEach((ans) => {
    if (!ans.isCorrect) hasMistakes = true;
});
if (score < total && hasMistakes) {
    const heading = document.createElement("h3");
    heading.textContent = "You made mistakes in these questions:";
    heading.style.color = "#c62828";
    heading.style.marginBottom = "10px";
    reviewDiv.appendChild(heading);
}
answers.forEach((ans, index) => {
    if (!ans.isCorrect) {
        const div = document.createElement("div");
        div.classList.add("question-review");
        let html = `    
            <p><strong>Q${index + 1}:</strong> ${ans.question}</p>
            <p>Your Answer: <span class="incorrect">${ans.selected}</span></p>
            <p>Correct Answer: <span class="correct">${ans.correctAnswer}</span></p>
        `;
        div.innerHTML = html;
        reviewDiv.appendChild(div);
    }
});

// Buttons
function playAgain() {
    window.location.href = "quiz.html";
}
function logout() {
    sessionStorage.clear();
    window.location.href = "registration.html";
}
document.getElementById('emailCertBtn').onclick = function() {
  const email = localStorage.getItem('quizUserEmail') || '';
  const player_name = localStorage.getItem("quizUserName") || '';
  const score = localStorage.getItem("quizScore") || '';
  const subject = localStorage.getItem("quizSubject") || '';
  
  if (!email) {
    alert('No email found. Please register again.');
    return;
  }

  // Open certificate page in a hidden iframe to capture it
  const iframe = document.createElement('iframe');
  iframe.style.position = 'fixed';
  iframe.style.left = '-9999px';
  iframe.src = `certificate.html?name=${encodeURIComponent(player_name)}&score=${encodeURIComponent(score)}&subject=${encodeURIComponent(subject)}&emailCapture=1`;
  document.body.appendChild(iframe);

  iframe.onload = () => {
    html2canvas(iframe.contentDocument.body).then(canvas => {
      const base64Image = canvas.toDataURL('image/png').split(',')[1]; // Remove data url prefix

      // Remove the iframe after capture
      document.body.removeChild(iframe);

      // Send email with attachment (base64 image)
      emailjs.send("service_tsoplxt", "template_vkptegj", {
        to_email: email,
        player_name,
        score,
        subject,
        attachment: base64Image,
        attachment_filename: 'certificate.png'
      }).then(function(response) {
        alert("Certificate sent to your email!");
      }, function(error) {
        alert("Failed to send certificate. Please try again.");
      });
    }).catch(err => {
      alert("Failed to capture certificate. Please try again.");
      document.body.removeChild(iframe);
    });
  };
};
