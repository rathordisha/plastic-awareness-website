// Show alert when pledge button is clicked
function showPledge() {
    try {
        // Get the action section
        const actionSection = document.getElementById('action');

        if (!actionSection) {
            console.error('Action section not found');
            return;
        }

        // Get the navbar height for offset
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        // Calculate the position to scroll to
        const offsetPosition = actionSection.offsetTop - navbarHeight - 20; // 20px extra padding

        // Smooth scroll
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Focus on form with delay
        setTimeout(() => {
            const nameInput = document.querySelector('#pledgeForm input[type="text"]');
            if (nameInput) {
                nameInput.focus();

                // Add temporary highlight to the form
                const formCard = document.querySelector('#action .card');
                if (formCard) {
                    formCard.classList.add('highlight-form');
                    setTimeout(() => {
                        formCard.classList.remove('highlight-form');
                    }, 2000);
                }
            }
        }, 1000);

    } catch (error) {
        console.error('Error in showPledge:', error);
    }
}

// Handle form submission
document.getElementById('pledgeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for taking the pledge! Together we can make a difference.");
    this.reset();
});

// Initialize carousel with 5-second interval
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#heroCarousel')
    new bootstrap.Carousel(myCarousel, {
        interval: 5000
    })
});
