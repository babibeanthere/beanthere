// menu-btn //
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    // Toggle the navbar visibility when the menu button is clicked
    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove('active');
        }
    });

    // Handle window resize to ensure the navbar is hidden on larger screens
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
        }
    });
});

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

// products //

// Fetch the JSON data
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    // Access the data here
    console.log(data);

    // Create a HTML element to display the data
    const productContainer = document.getElementById('product-container');

    // Loop through the data and create HTML elements for each product
    data.forEach(product => {
      const productHTML = `
        <div class="product">
          <h2>${product.name}</h2>
          <img src="${product.image}" alt="${product.name}">
          <p>Price: ${product.price}</p>
          <p>Original Price: ${product.originalPrice}</p>
          <p>Description: ${product.description}</p>
          <p>Stars: ${product.stars}</p>
        </div>
      `;

      // Append the product HTML to the product container
      productContainer.innerHTML += productHTML;
    });
  })
  .catch(error => console.error('Error:', error));

// reviews slideshow //

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach (slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

document.querySelector('.prev-btn').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    showSlide(currentSlide);
});

document.querySelector('.next-btn').addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

// Initialize the first slide
showSlide(currentSlide);