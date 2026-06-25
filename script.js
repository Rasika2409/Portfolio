let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Active Navbar Link on Scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(
                'header nav a[href*="' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

// Mobile Menu Toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Contact Form Success Message
const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        successMessage.style.display = "block";
        successMessage.textContent = "Your message has been sent successfully!";

        contactForm.reset();

        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
}

// Typing Role Animation
const roles = [
    "Web Developer",
    "Python Developer",
    "Java Developer",
    "Software Developer"
];

const typingText = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();

function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/Rasika_Raghunath_Patil_Resume.pdf";
    link.download = "Rasika_Raghunath_Patil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}