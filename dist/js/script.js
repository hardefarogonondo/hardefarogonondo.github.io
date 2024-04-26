// Theme Initialization
function initTheme() {
    const themeToggleButton = document.querySelector("#theme-toggle-button");
    const themeToggleButtonDarkIcon = document.getElementById("theme-toggle-button-dark-icon");
    const themeToggleButtonLightIcon = document.getElementById("theme-toggle-button-light-icon");
    function updateIcons() {
        const isDarkMode = document.documentElement.classList.contains("dark");
        themeToggleButtonDarkIcon?.classList.toggle("hidden", isDarkMode);
        themeToggleButtonLightIcon?.classList.toggle("hidden", !isDarkMode);
    }
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
        updateIcons();
    }
    themeToggleButton?.addEventListener("click", toggleDarkMode);
    const userPrefersDark = localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", userPrefersDark);
    updateIcons();
}

// Navbar Behavior
function handleNavbarBehavior() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top-button");
    window.onscroll = function() {
        const isScrolled = window.scrollY > fixedNav;
        header.classList.toggle("navbar-fixed", isScrolled);
        toTop.classList.toggle("hidden", !isScrolled);
        toTop.classList.toggle("flex", isScrolled);
    };
}

// Hamburger Menu Toggle
function setupHamburgerMenu() {
    const navMenu = document.querySelector("#nav-menu");
    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    });
    window.addEventListener("click", function(event) {
        if (!navMenu.contains(event.target) && event.target !== hamburger) {
            hamburger.classList.remove("hamburger-active");
            navMenu.classList.add("hidden");
        }
    });
}

// Navbar Event Listeners Initialization
function setupEventListeners() {
    handleNavbarBehavior();
    setupHamburgerMenu();
}

// Page Initialization
document.addEventListener("DOMContentLoaded", (event) => {
    initTheme();
    setupEventListeners();
});

// Typing Animation
const texts = ["Artificial Intelligence Engineer", "Machine Learning Engineer", "Robotics Engineer"];
let count = 0;
let index = 0;
let isDeleting = false;
let timeout;
function type() {
    let currentText = texts[count % texts.length];
    let actionSpeed;
    if (isDeleting) {
        index--;
        actionSpeed = 50;  // Speed of deleting
    } else {
        index++;
        actionSpeed = 50;  // Speed of typing
    }
    document.querySelector(".typing").textContent = currentText.slice(0, index);
    if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        actionSpeed = 2500;  // Pause at the end before deleting
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        count++;
        actionSpeed = 250;  // Delay before typing next text
    }
    timeout = setTimeout(type, actionSpeed);
}
type();

// Placeholder for View More toggle button
function toggleSkills() {
    var x = document.getElementById("more-skills");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}