/* JavaScript Code Example */
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    // JS Execution: Add a click event listener to every project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Example action: Log to console or open a detailed project modal
            console.log('Project card clicked:', card.querySelector('h3').textContent);
            card.classList.toggle('is-expanded'); // Toggles a CSS class
        });
    });
});