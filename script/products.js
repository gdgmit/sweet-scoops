function displayProducts(products) {
    let productsSection = document.querySelector(".products-box");
    productsSection.innerHTML = "";

    products.forEach(product => {
        let box = document.createElement("div");
        let flavorName = flavor_list.find(f => f.id == product.flavor_id)?.name;
        box.setAttribute("class", "box");
        box.setAttribute("id", product.id);

        box.innerHTML = `
            <div class="image-wrapper">
                <div class="off">-${product.off}%</div>
                <img src="${product.image}" alt="">
                <div class="cat-label">${flavorName}</div>
            </div>
            <div class="name-price">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price}</div>
                <div class="ratings">Rating: ${product.ratings} ★</div>
            </div>
            <div class="description">${product.description}</div>
            <div class="nutritional-info">
                <strong>Nutritional Info:</strong>
                <p>Calories: ${product.nutritionalInfo.calories}</p>
                <p>Fat: ${product.nutritionalInfo.fat}</p>
                <p>Sugar: ${product.nutritionalInfo.sugar}</p>
            </div>
            <div class="reviews">
                <strong>Reviews:</strong>
                ${product.reviews.map(review => `
                    <div class="review">
                        <p><strong>${review.user}</strong>: ${review.comment} - ${review.rating} ★</p>
                    </div>
                `).join('')}
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
            addToCart(e)
        });

        box.appendChild(addToCartButton);
        productsSection.appendChild(box);
    });

    handleQuantityButtonsInProductCard();
}
