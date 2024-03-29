// navbar
window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector("#to-top")
    if(window.scrollY > fixedNav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden")
        toTop.classList.add("flex")
    } else {
        header.classList.remove("navbar-fixed")
        toTop.classList.add("hidden")
        toTop.classList.remove("flex")
    }
}

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});


// outside click
window.addEventListener("click", function(event) {
    if(event.target != navMenu && event.target != hamburger) {
        hamburger.classList.remove("hamburger-active");
        navMenu.classList.add("hidden");
    }
});

// dark mode toggle
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const html = document.querySelector("html");

darkModeToggle.addEventListener("click", function() {
    if (darkModeToggle.checked) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

// moved toggle
if (
    localStorage.theme === "dark" || (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    darkModeToggle.checked = true;
  } else {
    darkModeToggle.checked = false;
  }