/**
 * DriveEasy Car Rental Website
 * Main JavaScript application logic
 */

// Global variables
let allCars = [];
let filteredCars = [];
let selectedCar = null;

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// DOM Elements
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const carsGrid = document.getElementById('carsGrid');
const searchInput = document.getElementById('searchInput');
const fuelFilter = document.getElementById('fuelFilter');
const priceFilter = document.getElementById('priceFilter');
const reviewsGrid = document.getElementById('reviewsGrid');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Main app initialization
 */
async function initializeApp() {
    setupEventListeners();
    setupScrollEffects();
    setupNavigation();
    await loadCarsData();
    await loadReviewsData();
    
    // Initialize scroll reveal animations
    if (typeof ScrollReveal !== 'undefined') {
        initializeScrollReveal();
    }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Navigation toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Search and filter functionality
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterCars, 300));
    }
    
    if (fuelFilter) {
        fuelFilter.addEventListener('change', filterCars);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterCars);
    }

    // Modal functionality
    setupModal();
    
    // Forms
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

/**
 * Setup navigation effects
 */
function setupNavigation() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

/**
 * Toggle mobile menu
 */
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

/**
 * Load cars data from backend API
 */
async function loadCarsData() {
    try {
        showLoadingState(carsGrid);
        
        // Try to fetch from backend first
        try {
            const response = await fetch(`${API_BASE_URL}/cars`);
            if (response.ok) {
                const result = await response.json();
                allCars = result.data || [];
            } else {
                throw new Error('Backend not available');
            }
        } catch (backendError) {
            console.log('Backend not available, using hardcoded data:', backendError.message);
            // Fallback to hardcoded data
            allCars = window.carsData || [];
        }
        
        filteredCars = [...allCars];
        displayCars(filteredCars);
        
    } catch (error) {
        console.error('Error loading cars data:', error);
        showErrorState(carsGrid, 'Failed to load cars data');
    }
}

/**
 * Load reviews data from backend API
 */
async function loadReviewsData() {
    try {
        showLoadingState(reviewsGrid);
        
        let reviews = [];
        
        // Try to fetch from backend first
        try {
            const response = await fetch(`${API_BASE_URL}/reviews`);
            if (response.ok) {
                const result = await response.json();
                reviews = result.data || [];
            } else {
                throw new Error('Backend not available');
            }
        } catch (backendError) {
            console.log('Backend not available, using hardcoded reviews:', backendError.message);
            // Fallback to hardcoded data
            reviews = window.reviewsData || [];
        }
        
        displayReviews(reviews);
        
    } catch (error) {
        console.error('Error loading reviews data:', error);
        showErrorState(reviewsGrid, 'Failed to load reviews');
    }
}

/**
 * Display cars in the grid
 */
function displayCars(cars) {
    if (!carsGrid) return;
    
    if (cars.length === 0) {
        carsGrid.innerHTML = `
            <div class="no-results">
                <i class='bx bx-search-alt-2'></i>
                <h3>No cars found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
        return;
    }
    
    const carsHTML = cars.map(car => createCarCard(car)).join('');
    carsGrid.innerHTML = carsHTML;
    
    // Add click events to book buttons
    document.querySelectorAll('.car-book-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const carId = e.target.dataset.carId;
            const car = allCars.find(c => c.id == carId || c._id === carId);
            if (car) {
                openBookingModal(car);
            }
        });
    });
}

/**
 * Create car card HTML
 */
function createCarCard(car) {
    const carId = car._id || car.id;
    const imageUrl = car.imageUrl || car.image || 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800';
    
    return `
        <div class="car-card fade-in">
            <div class="car-image">
                <img src="${imageUrl}" alt="${car.name}" loading="lazy">
                <div class="car-badge">${car.type}</div>
            </div>
            <div class="car-content">
                <h3 class="car-title">${car.name}</h3>
                <div class="car-details">
                    <div class="car-detail">
                        <i class='bx bx-user'></i>
                        <span>${car.seats} Seats</span>
                    </div>
                    <div class="car-detail">
                        <i class='bx bx-gas-pump'></i>
                        <span>${car.fuelType}</span>
                    </div>
                    <div class="car-detail">
                        <i class='bx bx-cog'></i>
                        <span>${car.type}</span>
                    </div>
                    <div class="car-detail">
                        <i class='bx bx-shield-check'></i>
                        <span>Insured</span>
                    </div>
                </div>
                <div class="car-price">
                    <div class="price">₹${car.pricePerDay}<span>/day</span></div>
                </div>
                <button class="car-book-btn" data-car-id="${carId}">
                    Book Now
                </button>
            </div>
        </div>
    `;
}

/**
 * Display reviews
 */
function displayReviews(reviews) {
    if (!reviewsGrid) return;
    
    const reviewsHTML = reviews.map(review => createReviewCard(review)).join('');
    reviewsGrid.innerHTML = reviewsHTML;
}

/**
 * Create review card HTML
 */
function createReviewCard(review) {
    const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
    const reviewerInitial = review.reviewerName.charAt(0).toUpperCase();
    
    return `
        <div class="review-card fade-in">
            <div class="review-header">
                <div class="reviewer-avatar">${reviewerInitial}</div>
                <div class="reviewer-info">
                    <h4>${review.reviewerName}</h4>
                    <div class="rating">${stars}</div>
                </div>
            </div>
            <div class="review-content">
                <p>"${review.comment}"</p>
            </div>
        </div>
    `;
}

/**
 * Filter cars based on search and filters
 */
function filterCars() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const fuelType = fuelFilter ? fuelFilter.value : '';
    const priceRange = priceFilter ? priceFilter.value : '';
    
    filteredCars = allCars.filter(car => {
        // Search filter
        const matchesSearch = !searchTerm || 
            car.name.toLowerCase().includes(searchTerm) ||
            car.type.toLowerCase().includes(searchTerm);
        
        // Fuel type filter
        const matchesFuel = !fuelType || car.fuelType === fuelType;
        
        // Price range filter
        let matchesPrice = true;
        if (priceRange) {
            const price = car.pricePerDay;
            switch (priceRange) {
                case '0-2000':
                    matchesPrice = price <= 2000;
                    break;
                case '2000-4000':
                    matchesPrice = price > 2000 && price <= 4000;
                    break;
                case '4000-6000':
                    matchesPrice = price > 4000 && price <= 6000;
                    break;
                case '6000+':
                    matchesPrice = price > 6000;
                    break;
            }
        }
        
        return matchesSearch && matchesFuel && matchesPrice;
    });
    
    displayCars(filteredCars);
}

/**
 * Setup modal functionality
 */
function setupModal() {
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBookingModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBookingModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeBookingModal();
        }
    });
}

/**
 * Open booking modal
 */
function openBookingModal(car) {
    selectedCar = car;
    const modal = document.getElementById('bookingModal');
    const modalCarDetails = document.getElementById('modalCarDetails');
    
    if (!modal || !modalCarDetails) return;
    
    // Populate car details
    modalCarDetails.innerHTML = `
        <h3>${car.name}</h3>
        <div class="car-details">
            <div class="car-detail">
                <i class='bx bx-user'></i>
                <span>${car.seats} Seats</span>
            </div>
            <div class="car-detail">
                <i class='bx bx-gas-pump'></i>
                <span>${car.fuelType}</span>
            </div>
            <div class="car-detail">
                <i class='bx bx-cog'></i>
                <span>${car.type}</span>
            </div>
            <div class="car-detail">
                <i class='bx bx-money'></i>
                <span>₹${car.pricePerDay}/day</span>
            </div>
        </div>
    `;
    
    // Set minimum date to today
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const today = new Date().toISOString().split('T')[0];
    
    if (startDateInput) {
        startDateInput.min = today;
        startDateInput.addEventListener('change', calculateBookingSummary);
    }
    if (endDateInput) {
        endDateInput.min = today;
        endDateInput.addEventListener('change', calculateBookingSummary);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

/**
 * Close booking modal
 */
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form
        if (bookingForm) {
            bookingForm.reset();
        }
        
        // Clear booking summary
        const bookingSummary = document.getElementById('bookingSummary');
        if (bookingSummary) {
            bookingSummary.innerHTML = '';
        }
    }
}

/**
 * Calculate booking summary
 */
function calculateBookingSummary() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const bookingSummary = document.getElementById('bookingSummary');
    
    if (!startDate || !endDate || !selectedCar || !bookingSummary) {
        return;
    }
    
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    if (endDateObj <= startDateObj) {
        bookingSummary.innerHTML = `
            <h4>Booking Summary</h4>
            <p style="color: #e74c3c;">End date must be after start date</p>
        `;
        return;
    }
    
    const days = Math.ceil((endDateObj - startDateObj) / (1000 * 60 * 60 * 24));
    const totalPrice = selectedCar.pricePerDay * days;
    
    bookingSummary.innerHTML = `
        <h4>Booking Summary</h4>
        <div class="summary-item">
            <span>Car:</span>
            <span>${selectedCar.name}</span>
        </div>
        <div class="summary-item">
            <span>Duration:</span>
            <span>${days} day${days > 1 ? 's' : ''}</span>
        </div>
        <div class="summary-item">
            <span>Rate per day:</span>
            <span>₹${selectedCar.pricePerDay}</span>
        </div>
        <div class="summary-item total">
            <span>Total Amount:</span>
            <span>₹${totalPrice.toLocaleString()}</span>
        </div>
    `;
}

/**
 * Handle booking form submission
 */
async function handleBookingSubmit(e) {
    e.preventDefault();
    
    if (!selectedCar) return;
    
    const formData = new FormData(bookingForm);
    const bookingData = {
        userName: document.getElementById('userName').value.trim(),
        userEmail: document.getElementById('userEmail').value.trim(),
        userPhone: document.getElementById('userPhone').value.trim(),
        carId: selectedCar._id || selectedCar.id,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        specialRequests: document.getElementById('specialRequests').value.trim()
    };
    
    // Basic validation
    if (!bookingData.userName || !bookingData.userEmail || !bookingData.startDate || !bookingData.endDate) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(bookingData.userEmail)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    const startDateObj = new Date(bookingData.startDate);
    const endDateObj = new Date(bookingData.endDate);
    
    if (endDateObj <= startDateObj) {
        showNotification('End date must be after start date', 'error');
        return;
    }
    
    try {
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        // Try to submit to backend
        try {
            const response = await fetch(`${API_BASE_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookingData)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showNotification('Booking confirmed successfully! You will receive a confirmation email shortly.', 'success');
                closeBookingModal();
            } else {
                showNotification(result.message || 'Booking failed. Please try again.', 'error');
            }
        } catch (backendError) {
            console.log('Backend not available, showing demo confirmation:', backendError.message);
            // Demo confirmation when backend is not available
            showNotification('Demo: Booking request received! (Backend not connected)', 'success');
            closeBookingModal();
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    } catch (error) {
        console.error('Booking submission error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    }
}

/**
 * Handle contact form submission
 */
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const contactData = {
        name: document.getElementById('contactName').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        phone: document.getElementById('contactPhone').value.trim(),
        message: document.getElementById('contactMessage').value.trim()
    };
    
    // Basic validation
    if (!contactData.name || !contactData.email || !contactData.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(contactData.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    try {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (no backend endpoint for contact)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
        contactForm.reset();
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    } catch (error) {
        console.error('Contact form submission error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    }
}

/**
 * Handle newsletter subscription
 */
async function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail').value.trim();
    const messageElement = document.getElementById('newsletterMessage');
    
    if (!email) {
        showNewsletterMessage('Please enter your email address', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNewsletterMessage('Please enter a valid email address', 'error');
        return;
    }
    
    try {
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        // Try to submit to backend
        try {
            const response = await fetch(`${API_BASE_URL}/newsletter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showNewsletterMessage('Successfully subscribed to newsletter!', 'success');
                newsletterForm.reset();
            } else {
                showNewsletterMessage(result.message || 'Subscription failed. Please try again.', 'error');
            }
        } catch (backendError) {
            console.log('Backend not available, showing demo confirmation:', backendError.message);
            // Demo confirmation when backend is not available
            showNewsletterMessage('Demo: Subscription received! (Backend not connected)', 'success');
            newsletterForm.reset();
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        showNewsletterMessage('An error occurred. Please try again.', 'error');
    }
}

/**
 * Show newsletter message
 */
function showNewsletterMessage(message, type) {
    const messageElement = document.getElementById('newsletterMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = `newsletter-message ${type}`;
        messageElement.style.display = 'block';
        
        setTimeout(() => {
            messageElement.style.display = 'none';
        }, 5000);
    }
}

/**
 * Show notification
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class='bx ${type === 'success' ? 'bx-check-circle' : type === 'error' ? 'bx-error-circle' : 'bx-info-circle'}'></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 8px;
        padding: 15px 20px;
        max-width: 400px;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        margin-left: 15px;
        color: inherit;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

/**
 * Setup scroll reveal animations
 */
function initializeScrollReveal() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        delay: 400,
        reset: true
    });
    
    // Animate sections
    sr.reveal('.hero-content', { delay: 600, origin: 'left' });
    sr.reveal('.hero-image', { delay: 600, origin: 'right' });
    sr.reveal('.section-header', { delay: 300, origin: 'top' });
    sr.reveal('.car-card', { delay: 300, origin: 'bottom', interval: 100 });
    sr.reveal('.service-card', { delay: 300, origin: 'bottom', interval: 100 });
    sr.reveal('.review-card', { delay: 300, origin: 'bottom', interval: 100 });
    sr.reveal('.about-text', { delay: 500, origin: 'left' });
    sr.reveal('.about-image', { delay: 500, origin: 'right' });
    sr.reveal('.contact-info', { delay: 500, origin: 'left' });
    sr.reveal('.contact-form', { delay: 500, origin: 'right' });
}

/**
 * Setup scroll effects for loading animations
 */
function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.car-card, .service-card, .review-card').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Utility function: Debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility function: Email validation
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show loading state
 */
function showLoadingState(container) {
    if (container) {
        container.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        `;
    }
}

/**
 * Show error state
 */
function showErrorState(container, message) {
    if (container) {
        container.innerHTML = `
            <div class="error-state">
                <i class='bx bx-error-circle'></i>
                <h3>Oops! Something went wrong</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Add CSS for notifications and loading states
const additionalStyles = `
    <style>
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .loading-state, .error-state, .no-results {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 60px 20px;
            grid-column: 1 / -1;
        }
        
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        .error-state i, .no-results i {
            font-size: 4rem;
            color: #667eea;
            margin-bottom: 20px;
        }
        
        .error-state h3, .no-results h3 {
            font-size: 1.5rem;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .error-state p, .no-results p {
            color: #666;
            font-size: 1.1rem;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease;
        }
        
        .car-card, .service-card, .review-card {
            opacity: 0;
            transform: translateY(20px);
        }
    </style>
`;

// Insert additional styles
document.head.insertAdjacentHTML('beforeend', additionalStyles);