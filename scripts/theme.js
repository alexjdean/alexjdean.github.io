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
    
    // Use more reliable Unicode characters with fallback
    const sunIcon = '☀️';
    const moonIcon = '🌙';
    
    // Set initial button text with fallback
    function updateButtonText(theme) {
        if (theme === 'dark') {
            toggleButton.innerHTML = `${sunIcon} <span>Light</span>`;
        } else {
            toggleButton.innerHTML = `${moonIcon} <span>Dark</span>`;
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
    
    document.body.appendChild(toggleButton);
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme); 