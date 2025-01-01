function validateCredentials(email, password) {
  // Dummy credentials for demonstration
  const validEmail = "tejasaveb@gmail.com";
  const validPassword = "teju@123";

  return email === validEmail && password === validPassword;
}

function signIn() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (validateCredentials(email, password)) {
    alert('Sign In successful!');
    // Redirect to the index.html page
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

function signUp() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email !== '' && password !== '') {
    alert('Sign Up successful! Please sign in now.');
    // Optionally save the credentials (not recommended for production)
  } else {
    alert('Please fill in both email and password.');
  }
}
