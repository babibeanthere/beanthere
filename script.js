let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


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
