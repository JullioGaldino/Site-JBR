document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');

            portfolioCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.classList.remove('hidden');
                    
                    card.style.animation = 'none';
                    void card.offsetWidth;
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
