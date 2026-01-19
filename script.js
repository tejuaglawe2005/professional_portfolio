// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Certifications toggle (FIXED & SMOOTH)
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".cert-btn");
    const content = document.querySelector(".cert-content");
    const arrow = document.querySelector(".arrow");
  
    if (btn && content) {
      btn.addEventListener("click", () => {
        const isOpen = content.style.display === "block";
  
        content.style.display = isOpen ? "none" : "block";
        arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
    }
  });
  