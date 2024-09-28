// Newsletter Popup Script (Optional)

// Show the newsletter popup after 5 seconds
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
      newsletterModal.show();
    }, 5000); // 5000 milliseconds = 5 seconds
  });
  