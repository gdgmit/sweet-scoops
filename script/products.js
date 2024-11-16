function displayProducts(products) {
    let productsSection = document.querySelector(".products-box");
    productsSection.innerHTML = "";

    products.forEach(product => {
        let box = document.createElement("div");
        let flavorName = flavor_list.find(f => f.id == product.flavor_id)?.name;

        box.setAttribute("class", "box");
        box.setAttribute("id", product.id);

        // Create ratings stars based on the product's rating
        const stars = "⭐".repeat(Math.floor(product.ratings)) + "☆".repeat(5 - Math.floor(product.ratings));

        box.innerHTML = `
            <div class="image-wrapper">
                <div class="off">-${product.off}%</div>
                <img src="${product.image}" alt="">
                <div class="cat-label">${flavorName}</div>
            </div>
            <div class="name-price">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price}</div>
            </div>
            <div class="description">${product.description}</div>
            <div class="ratings">Ratings: ${stars} (${product.ratings}/5)</div>
            <div class="nutrition">
                <h4>Nutritional Info:</h4>
                <ul>
                    <li>Calories: ${product.nutritionalInfo.calories}</li>
                    <li>Fat: ${product.nutritionalInfo.fat}</li>
                    <li>Sugar: ${product.nutritionalInfo.sugar}</li>
                    <li>Protein: ${product.nutritionalInfo.protein}</li>
                </ul>
            </div>
            <div class="reviews">
                <h4>Reviews:</h4>
                <ul>
                    ${product.reviews.map(review => `<li><strong>${review.user}:</strong> ${review.comment}</li>`).join("")}
                </ul>
            </div>
            <div class="qty">
                <span class="decrease">-</span>
                <span class="pcs">0</span>
                <span class="increase">+</span>
            </div>
        `;

        let addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", (e) => {
            addToCart(e);
        });

        box.appendChild(addToCartButton);
        productsSection.appendChild(box);
    });

    handleQuantityButtonsInProductCard();
}
