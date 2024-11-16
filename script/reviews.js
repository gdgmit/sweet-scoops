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
// Handle review form submission
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the values from the form
    const name = document.getElementById('name').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const reviewText = document.getElementById('review-text').value;

    // Create a new review item
    const newReview = document.createElement('div');
    newReview.classList.add('review-item');
    newReview.innerHTML = `
        <div class="review-header">
            <div class="reviewer-name">${name}</div>
            <div class="review-rating">${'★'.repeat(rating)}</div>
        </div>
        <div class="review-text">
            <p>${reviewText}</p>
        </div>
    `;

    // Append the new review to the review list
    document.querySelector('.reviews-list').prepend(newReview);

    // Reset the form
    document.getElementById('review-form').reset();
});
