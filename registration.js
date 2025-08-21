// registration.js

// Trap back and forward browser navigation on registration page
// history.pushState(null, '', window.location.href);

// window.addEventListener('popstate', function(event) {
//   history.pushState(null, '', window.location.href);
// });
for(let i=0; i<30; i++) {
  history.pushState(null, '', window.location.href);
}

window.addEventListener('popstate', function(event) {
  history.pushState(null, '', window.location.href);
});

document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  // Save user info to localStorage
  localStorage.setItem("quizUserName", name);
  localStorage.setItem("quizUserEmail", email);

  // Animate form sliding out to the left
  const formContainer = document.querySelector(".form-container");
  formContainer.classList.add("slide-out-left");

  // After animation, redirect to subject selection page
  setTimeout(() => {
    window.location.href = "subject.html";
  }, 500); // Animation duration
});
