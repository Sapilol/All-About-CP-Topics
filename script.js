document.addEventListener('DOMContentLoaded', () => {
    // Handle solution card clicks
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.dataset.url;
            if (url) {
                window.open(url, '_blank');
            }
        });

        // Add hover effect
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Dynamic page creation for the book effect
    const pages = document.getElementById('pages');
    const totalPages = 5;

    for (let i = 0; i < totalPages; i++) {
        const page = document.createElement('div');
        page.className = 'page';
        page.style.transform = `rotateY(${i * (360 / totalPages)}deg) translateZ(150px)`;
        pages.appendChild(page);
    }
});
