/**
 * scroll.js - GSAP Scroll Animations
 * Handles smooth scrolling and scroll-triggered animations
 */

document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Scroll Animations (Month Content Only)
  initScrollAnimations();
});

// ============================================
// Scroll Animations
// ============================================
function initScrollAnimations() {
  // Month Sections Animation
  const sections = document.querySelectorAll(".month-section");

  sections.forEach((section, index) => {
    // Animate Content (Text)
    const content = section.querySelector(".month-content");

    if (content) {
      gsap.from(content, {
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  });
}
