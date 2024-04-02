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

// // dark mode toggle
// const darkModeToggle = document.querySelector("#dark-mode-toggle");
// const html = document.querySelector("html");

// darkModeToggle.addEventListener("click", function() {
//     if (darkModeToggle.checked) {
//         html.classList.add("dark");
//         localStorage.theme = "dark";
//     } else {
//         html.classList.remove("dark");
//         localStorage.theme = "light";
//     }
// });

// // moved toggle
// if (
//     localStorage.theme === "dark" || (!("theme" in localStorage) &&
//       window.matchMedia("(prefers-color-scheme: dark)").matches)
//   ) {
//     darkModeToggle.checked = true;
//   } else {
//     darkModeToggle.checked = false;
//   }

// Dark mode toggle
const themeToggleBtn = document.querySelector("#theme-toggle");
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

function updateIcons() {
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (isDarkMode) {
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
  }
}

themeToggleBtn.addEventListener("click", function() {
  document.documentElement.classList.toggle("dark");
  
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
  
  updateIcons(); // Update the icons each time the theme is toggled
});

// Set the initial theme and icon state on page load
if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
updateIcons(); // Ensure the correct icon is displayed based on the initial theme
