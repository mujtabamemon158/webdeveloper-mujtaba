// scripts.js

// Handling form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    alert('Message sent! I will get back to you soon.');
    document.getElementById('contact-form').reset(); // Reset the form fields
  });
  