(function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

function initializeTheme() {
    // Get the already-applied theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Create and append the toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    
    // Set initial button text
    function updateButtonText(theme) {
        if (theme === 'dark') {
            toggleButton.innerHTML = `<span>Prefer light mode?</span>`;
        } else {
            toggleButton.innerHTML = `<span>Prefer dark mode?</span>`;
        }
    }
    
    updateButtonText(savedTheme);
    
    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
    });
    
    const frontPage = document.querySelector('.front-page');
    if (frontPage) {
        frontPage.appendChild(toggleButton);
    } else {
        document.body.appendChild(toggleButton);
    }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme); 