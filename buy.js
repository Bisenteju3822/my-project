// buy.js
document.getElementById('buyButton').addEventListener('click', function () {
  // Simulate a successful purchase
  setTimeout(function () {
    document.getElementById('successMessage').style.display = 'block';
  }, 1000); // Display success message after 1 second
});
