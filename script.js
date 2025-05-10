// script.js

const textArray = [
  "Creating immersive AR/VR experiences.",
"Innovating for the metaverse future.",
 "Smart apps, games, and solutions.",
  "Your vision, our technology."
];
const typewriterElement = document.getElementById("typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typewriterElement.textContent += textArray[textIndex][charIndex];
    charIndex++;
    setTimeout(typeText, 100); // Adjust typing speed (100ms per character)
  } else {
    setTimeout(eraseText, 2000); // Wait 2 seconds before erasing
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 50); // Adjust erasing speed (50ms per character)
  } else {
    textIndex = (textIndex + 1) % textArray.length; // Move to the next text
    setTimeout(typeText, 500); // Start typing the next text after 0.5 seconds
  }
}
// Start the typewriting effect
typeText();

// function toggleNav() {
//   const nav = document.getElementById("nav-menu");
//   nav.classList.toggle("hidden");
// }

function toggleNav() {
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("hidden");
  nav.classList.toggle("max-h-96");
}

function closeNavOnClick() {
  const nav = document.getElementById("nav-menu");
  if (window.innerWidth < 768) {
    nav.classList.add("hidden");
    nav.classList.remove("max-h-96");
  }
}
//COUNTING EFFECT
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;
          const increment = target / 200;
          if (count < target) {
              counter.innerText = Math.ceil(count + increment);
              setTimeout(updateCount, 10);
          } else {
              counter.innerText = target + ' +';
          }
      };
      updateCount();
  });
});

//footer
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      targetElement.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

