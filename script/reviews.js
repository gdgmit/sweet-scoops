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
document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewList = document.querySelector('.review-list');

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const reviewText = document.getElementById('review').value;

        // Create new review elements
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const reviewContent = document.createElement('p');
        reviewContent.textContent = `"${reviewText}"`;

        const reviewAuthor = document.createElement('span');
        reviewAuthor.textContent = `- ${name}`;

        reviewDiv.appendChild(reviewContent);
        reviewDiv.appendChild(reviewAuthor);

        // Append new review to the list
        reviewList.appendChild(reviewDiv);

        // Clear the form fields
        reviewForm.reset();
    });
});
