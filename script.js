// Navigation menu toggle
document.getElementById('navToggle').addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        document.getElementById("fff").style.width = "0%";
        document.querySelector("main").style.width = "90%";
    } else {
        navMenu.style.display = 'block';
        document.getElementById("fff").style.width = "30%";
        document.querySelector("main").style.width = "65%";
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
    applyUserPreferences(); // Apply preferences when the page loads
});

// Hide loading screen once the page is fully loaded
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';
});

// Save user's preference in local storage
function savePreferences() {
    localStorage.setItem('sectionBgColor', 'black');
    localStorage.setItem('sectionTextColor', 'white');
    document.getElementById("cc").innerHTML = "<img id=\"reverseTheme\" src=\"img/icons/iboff.png\" aria-label=\"Reverse Theme\" onclick='resetPreferences()'>";
    applyUserPreferences();
}

// Apply user's preferences
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

// Reverse the theme
function resetPreferences() {
    localStorage.removeItem('sectionBgColor');
    localStorage.removeItem('sectionTextColor');
    document.getElementById("cc").innerHTML = "<img id=\"logoIcon\" src=\"img/icons/lbon.png\" alt=\"Logo\" onclick='savePreferences()'>";
    applyUserPreferences(); // Reset to default styles
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

document.getElementById('enableNotifications').addEventListener('click', function() {
    // Request permission for notifications
    alert("THANK YOU FOR YOUR COONTRIBUTION!!!") 
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                checkDateAndNotify();
            }
        });
    } else {
        checkDateAndNotify();
    }
});

function checkDateAndNotify() {
    // Set the Ocean Cleaning Day date
    const oceanCleaningDay = new Date(new Date().getFullYear(), 2, 22); // March 22

    // Get today's date
    const today = new Date();

    // Check if today is Ocean Cleaning Day
    if (today.getMonth() === oceanCleaningDay.getMonth() && today.getDate() === oceanCleaningDay.getDate()) {
        sendNotification();
    } else {
        console.log("Today is not Ocean Cleaning Day.");
    }
}

function sendNotification() {
    const options = {
        body: 'Join us for Ocean Cleaning Day! Click here to volunteer with us.',
        icon: 'img/icons/ocean-cleaning.png', // Optional: add an icon
        data: {
            url: 'https://ocrrestore.vercel.app' // URL to open when notification is clicked
        }
    };

    const notification = new Notification('Ocean Cleaning Day', options);
    notification.onclick = function(event) {
        event.preventDefault(); // Prevent the browser from focusing the Notification's tab
        window.open(notification.data.url, '_blank');
    };
}

// Check date and notify user if necessary when the page loads
document.addEventListener('DOMContentLoaded', checkDateAndNotify);
function go() {
    localStorage.setItem('sectionBgColor', 'black');
    localStorage.setItem('sectionTextColor', 'white');
    document.getElementById("cc").innerHTML = "<img id=\"reverseTheme\" src=\"img/icons/iboff.png\" aria-label=\"Reverse Theme\" onclick='gh()'>"
    applyUserPreferences();
};
function gh() {
    localStorage.removeItem('sectionBgColor');
    localStorage.removeItem('sectionTextColor');
    document.getElementById("cc").innerHTML =  "<img id=\"logoIcon\" src=\"img/icons/lbon.png\" alt=\"Logo\" onclick='go()'>"
    applyUserPreferences(); // Reset to default styles
};
