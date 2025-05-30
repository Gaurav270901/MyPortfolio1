// Show/hide the button on scroll
window.onscroll = function() {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Scroll to top when the button is clicked
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
