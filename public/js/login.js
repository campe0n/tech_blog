const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signUpFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email-signup").value.trim();
  const username = document.getElementById("username-signup").value.trim();
  const password = document.getElementById("password-signup").value.trim();

  if (email && username && password) {
    const response = await fetch("/api/login/signin", {
      method: "POST",
      body: JSON.stringify({ email, username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .getElementById("login-form")
  .addEventListener("submit", loginFormHandler);

document
  .getElementById("signup-form")
  .addEventListener("submit", signUpFormHandler);
