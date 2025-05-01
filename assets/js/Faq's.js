document.addEventListener('DOMContentLoaded', function() {
    const faqBg = document.querySelector('.faq-bg');
    const faqSection = document.getElementById('faq-section');
    const faqCards = document.querySelectorAll('.faq-card');
    
    // Initialize cards with proper starting positions
    faqCards.forEach((card, index) => {
        card.style.transform = 'translateY(20px)';
        card.style.opacity = '0';
    });

    function checkFAQVisibility() {
        const rect = faqSection.getBoundingClientRect();
        const isVisible = (rect.top <= (window.innerHeight - 450) && rect.bottom >= 290);
        faqBg.classList.toggle('active', isVisible);
    }
    
    function checkCardVisibility() {
        faqCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = (
                rect.top <= (window.innerHeight * 0.85) &&
                rect.bottom >= (window.innerHeight * 0.15)
            );
            
            if (isVisible) {
                setTimeout(() => {
                    card.style.transform = 'translateY(0)';
                    card.style.opacity = '1';
                    card.classList.add('show');
                }, index * 150);
            }
        });
    }
    
    // Initial checks
    checkFAQVisibility();
    checkCardVisibility();
    
    // Event listeners
    window.addEventListener('scroll', () => {
        checkFAQVisibility();
        checkCardVisibility();
    });
    
    // Simplified resize handler
    window.addEventListener('resize', () => {
        checkFAQVisibility();
        checkCardVisibility();
    });
});