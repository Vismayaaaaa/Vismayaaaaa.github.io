// ===== Select elements =====
const dockNav = document.querySelector(".dock-nav");
const navLinks = document.querySelectorAll(".dock-nav ul li a");
const sections = document.querySelectorAll("section");
const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".dock-nav ul");

// ===== Scroll handler =====
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Shrink navbar
  dockNav.classList.toggle("shrink", scrollY > 80);

  // Highlight active nav link
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// ===== Smooth scroll & mobile menu close =====
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }

    // Close mobile menu if open
    navUL.classList.remove("active");
  });
});

// ===== Mobile hamburger toggle =====
const mobileMenu = document.querySelector('.dock-nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1 // 10% of element visible triggers animation
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, observerOptions);

  // Select all elements that should animate
  const elements = document.querySelectorAll(
    '.fade-in, .fade-in-down, .slide-in-left, .slide-in-right, ' +
    '.hero .content h2, .hero .content p, .hero-buttons, .hero .socials, .hero-shape, ' +
    '#about h3, #about .about-text, ' +
    '#skills .skills-header h2, #skills .skills-header h3.skills-tagline, .skill-card, ' +
    '#projects h2, .projects-tagline, .project-card, ' +
    '#contact h3, #contact p, #contact .contact-icons a, footer, .dock-nav'
  );

  elements.forEach(el => observer.observe(el));
});


