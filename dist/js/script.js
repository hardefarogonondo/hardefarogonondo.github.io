// Theme Toggle Button
document.addEventListener("DOMContentLoaded", (event) => {
    const themeToggleButton = document.querySelector("#theme-toggle-button");
    const themeToggleButtonDarkIcon = document.getElementById("theme-toggle-button-dark-icon");
    const themeToggleButtonLightIcon = document.getElementById("theme-toggle-button-light-icon");
    function updateIcons() {
        const isDarkMode = document.documentElement.classList.contains("dark");
        if (isDarkMode) {
            themeToggleButtonDarkIcon?.classList.add("hidden");
            themeToggleButtonLightIcon?.classList.remove("hidden");
        } else {
            themeToggleButtonDarkIcon?.classList.remove("hidden");
            themeToggleButtonLightIcon?.classList.add("hidden");
        }
    }
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
        updateIcons();
    }
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleDarkMode);
    }
    if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    updateIcons();
  });

// Navbar Behavior
window.onscroll = function() {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top-button");
  if(window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
      toTop.classList.remove("hidden");
      toTop.classList.add("flex");
  } else {
      header.classList.remove("navbar-fixed");
      toTop.classList.add("hidden");
      toTop.classList.remove("flex");
  }
};

// Hamburger Menu Toggle Button
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Hamburger Menu Hide Condition
window.addEventListener("click", function(event) {
  if(!navMenu.contains(event.target) && event.target !== hamburger) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
  }
});