// Gestion du carrousel d'images
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optionally, you can add auto-slide functionality
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Responsive navigation menu toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});

// Gestion du filtre des produits
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            if (selectedCategory === 'all' || product.getAttribute('data-category') === selectedCategory) {
                product.style.display = 'flex'; // Afficher le produit
            } else {
                product.style.display = 'none'; // Masquer le produit
            }
        });
    });
});