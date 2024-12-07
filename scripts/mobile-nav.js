document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const toggleSpans = mobileNavToggle.querySelectorAll('span');

    mobileNavToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger to X
        toggleSpans[0].style.transform = mobileMenu.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 6px)' 
            : 'none';
        toggleSpans[1].style.opacity = mobileMenu.classList.contains('active') 
            ? '0' 
            : '1';
        toggleSpans[2].style.transform = mobileMenu.classList.contains('active') 
            ? 'rotate(-45deg) translate(5px, -6px)' 
            : 'none';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && 
            !mobileNavToggle.contains(event.target) && 
            mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            toggleSpans[0].style.transform = 'none';
            toggleSpans[1].style.opacity = '1';
            toggleSpans[2].style.transform = 'none';
        }
    });
}); 