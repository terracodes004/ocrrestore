// Navigation menu toggle
document.getElementById('navToggle').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        document.getElementById("fff").style.width = "0%"
        document.querySelector("main").style.width = "90%"

    } else {
        navMenu.style.display = 'block';
        document.getElementById("fff").style.width = "20%"
        document.querySelector("main").style.width = "75%"


    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content update example
document.addEventListener('DOMContentLoaded', function() {
    const introSection = document.getElementById('intro');
    const dynamicContent = document.createElement('p');
    dynamicContent.textContent = 'Did you know? Oceans cover more than 70% of the Earth\'s surface and contain 97% of the planet\'s water!';
    introSection.appendChild(dynamicContent);
});

// Hide loading screen once the page is fully loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';
    applyUserPreferences(); // Apply preferences when the page loads
});

// Save user's preference in local storage
function go() {
    localStorage.setItem('sectionBgColor', 'black');
    localStorage.setItem('sectionTextColor', 'white');
    document.getElementById("cc").innerHTML = "<img id=\"reverseTheme\" src=\"img/icons/iboff.png\" aria-label=\"Reverse Theme\" onclick='gh()'>"
    applyUserPreferences();
};

// Apply user's preferences
function applyUserPreferences() {
    const sections = document.querySelectorAll('main section');
    const bgColor = localStorage.getItem('sectionBgColor');
    const textColor = localStorage.getItem('sectionTextColor');

    if (bgColor && textColor) {
        sections.forEach(section => {
            section.style.backgroundColor = bgColor;
            section.style.color = textColor;
        });
    }
}

// Reverse the theme
function gh() {
    localStorage.removeItem('sectionBgColor');
    localStorage.removeItem('sectionTextColor');
    document.getElementById("cc").innerHTML =  "<img id=\"logoIcon\" src=\"img/icons/lbon.png\" alt=\"Logo\" onclick='go()'>"
    applyUserPreferences(); // Reset to default styles
};

// Apply default styles if no preferences are set
function applyUserPreferences() {
    const sections = document.querySelectorAll('main section');
    const bgColor = localStorage.getItem('sectionBgColor') || '';
    const textColor = localStorage.getItem('sectionTextColor') || '';

    sections.forEach(section => {
        section.style.backgroundColor = bgColor;
        section.style.color = textColor;
        document.querySelector("main").style.background = bgColor;
    });
}

// Show full content when "See More" is clicked
document.querySelectorAll('.see-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.closest('section');
        parent.querySelector('.short-content').style.display = 'none';
        parent.querySelector('.full-content').style.display = 'block';
    });
});

