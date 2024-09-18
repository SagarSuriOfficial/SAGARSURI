// Example: Show loader on page load and hide after 3 seconds
document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 3000); // Change this to the duration you want
  });
  