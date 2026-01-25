// Theme JavaScript

// Utility function for adding to cart
function addToCart(formData) {
    fetch(window.routes.cart_add_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // Refresh cart or show notification
            console.log('Added to cart:', data);
            // You can add custom cart drawer/notification logic here
        })
        .catch(error => {
            console.error('Error adding to cart:', error);
        });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('King Pine theme loaded');

    // Product form handling
    const productForms = document.querySelectorAll('form[action*="/cart/add"]');
    productForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            const data = {
                items: [{
                    id: formData.get('id'),
                    quantity: formData.get('quantity') || 1
                }]
            };
            addToCart(data);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Expose utility functions globally if needed
window.KingPine = {
    addToCart: addToCart
};
