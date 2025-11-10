const form = document.getElementById('loginForm');
const loginScreen = document.getElementById('loginScreen');
const waitingScreen = document.getElementById('waitingScreen');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username) {
    alert("⚠️ Please enter your username.");
    return;
  }

  if (!password) {
    alert("⚠️ Please enter your password.");
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    alert("❌ Incorrect username or password.");
    return;
  }

  // Show waiting screen
  loginScreen.style.display = 'none';
  waitingScreen.style.display = 'flex';

  // Simulate loading before redirect
  setTimeout(() => {
    alert("✅ Login successful! Welcome back, " + username + "!");
    window.location.href = "Homepage.html";
  }, 2500);
});
