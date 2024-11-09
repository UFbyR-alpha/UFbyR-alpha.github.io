// Function to toggle themes based on the selected theme
function setTheme(theme) {
    const body = document.body;

    // Remove existing theme classes
    body.classList.remove('dark-theme', 'pink-theme', 'dark-gray-theme');

    // Add the selected theme class
    if (theme) {
        body.classList.add(theme);
    }

    // Update theme toggle button text based on the current theme
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Switch to Pink Theme';
    } else if (body.classList.contains('pink-theme')) {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    }
}

// Function to filter movie titles based on the search input
function filterMovies() {
    const searchInput = document.getElementById('movie-search').value.toLowerCase();
    const movieTitles = document.querySelectorAll('.movie-title');
    
    movieTitles.forEach(title => {
        const movieName = title.textContent.toLowerCase();
        if (movieName.includes(searchInput)) {
            title.parentElement.style.display = 'block';
        } else {
            title.parentElement.style.display = 'none';
        }
    });
}
// script.js

// This script highlights the link of the current page
document.addEventListener("DOMContentLoaded", function () {
    // Get all nav links
    const navLinks = document.querySelectorAll("nav a");

    // Get the current page's filename
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through each link and add the active class if it matches the current page
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
        
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const pageSelect = document.getElementById('page-select');

    // Event listener for dropdown change
    pageSelect.addEventListener('change', function() {
        const selectedPage = this.value;
        if (selectedPage) {
            window.location.href = selectedPage;
        }
    });
});

// Initialize default theme as dark theme
setTheme('pink-theme');