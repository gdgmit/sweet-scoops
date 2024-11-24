var swiper = new Swiper(".reviews-box", {
    cssMode: true,
    slidesPerView:3,
    spaceBetween:20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:1,
        },
        600: {
            slidesPerView:2,
        },
        1200: {
            slidesPerView:3,
        },
    },
});
// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('review-form'); // Ensure the correct form ID
    const reviewList = document.querySelector('.reviews-list'); // Use the correct class for the review list

    // Handle review form submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from reloading the page

        // Get the values from the form
        const name = document.getElementById('name').value;
        const rating = document.querySelector('input[name="rating"]:checked')?.value || 0; // Handle no rating case
        const reviewText = document.getElementById('review-text').value;

        // Create a new review item
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review-item');
        reviewDiv.innerHTML = `
            <div class="review-header">
                <div class="reviewer-name">${name}</div>
                <div class="review-rating">${'★'.repeat(rating)}</div>
            </div>
            <div class="review-text">
                <p>${reviewText}</p>
            </div>
        `;

        // Append the new review to the review list
        reviewList.prepend(reviewDiv);

        // Reset the form fields
        reviewForm.reset();
    });
});

});
