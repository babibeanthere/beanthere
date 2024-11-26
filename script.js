// Select the navbar and search form elements
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

// Menu button toggle functionality
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');       
    searchForm.classList.remove('active');   
};

// Search button toggle functionality
document.querySelector('#search-btn').onclick = () => 
    searchForm.classList.toggle('active');  
    navbar.classList.remove('active');      

// Remove both menus when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};


// Get the slider container and its child elements
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

// Function to slide the items
function slide(direction) {
    const totalItems = items.length;
    
    // Update currentIndex based on direction
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % totalItems;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    }

    // Adjust the position of the slider to show the correct item
    slider.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + 20)}px)`;
}

// Add event listeners for the buttons
document.querySelector('.arrow-button.next').addEventListener('click', () => slide('next'));
document.querySelector('.arrow-button.prev').addEventListener('click', () => slide('prev'));


// For Contact Form //

// Wait for the DOM to fully load before attaching the event
document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const form = document.querySelector("form");

    // Add an event listener to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form values
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const phone = form.querySelector('input[type="number"]').value;

        // Simple validation checks
        if (name === "" || email === "" || phone === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate phone number (optional - here checking if it contains at least 10 digits)
        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        // If validation passes, submit the form (Here you would integrate your backend form submission)
        alert("Thank you for contacting us! We will get back to you soon.");
        
        // Reset the form (optional, you can remove this line if you don't want the form to reset after submission)
        form.reset();
    });
});
