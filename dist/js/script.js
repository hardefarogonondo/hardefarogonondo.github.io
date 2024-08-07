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

// Skills Section See More Button
let isSkillsHidden = true;
document.getElementById("skills-see-more-button").addEventListener("click", () => {
    const moreSkillsElements = document.querySelectorAll(".more-skills");
    isSkillsHidden = !isSkillsHidden;
    moreSkillsElements.forEach(elem => {
        elem.classList.toggle("hidden", isSkillsHidden);
    });
    document.getElementById("skills-see-more-button").textContent = isSkillsHidden ? "See More" : "See Less";
});

// Key Achivements and Key Responsibilities Buttons
document.addEventListener("DOMContentLoaded", function() {
    const workEntries = document.querySelectorAll(".work-entry");
    workEntries.forEach(entry => {
        const buttons = entry.querySelectorAll(".toggle-button");
        const lists = entry.querySelectorAll(".lists ul");
        buttons.forEach((button, index) => {
            button.addEventListener("click", function() {
                lists[index].classList.toggle("hidden");
                button.classList.toggle("active");
            });
        });
    });
});

// Zoomable Images
const zoomableImages = document.querySelectorAll('[data-zoom="true"]');
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
zoomableImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
});

// Send Emails
(function () {
    emailjs.init("PvHudeERdkidaP5VH");
})();


function sendEmail(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messages").value;
    const emailParams = {
        from_name: name,
        from_email: email,
        message: message
    };
    emailjs.send("service_b903pvg", "template_1euz35e", emailParams)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS error:", error);
        });
}