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
function displayFlavorFilter() {	

    let flavorFilterSection = document.querySelector(".categories-wrapper");	

    let allButton = document.createElement("button");	
    allButton.setAttribute("id", "all");	
    allButton.setAttribute("class", "active");	
    allButton.textContent = "All";	
    flavorFilterSection.appendChild(allButton);	
    allButton.addEventListener("click", () => {	
        flavorFilterSection.querySelector(".active").classList.remove("active")	
        allButton.classList.add("active")	
        filterProducts("all")	
    })	

    flavor_list.forEach(flavor => {	
        let button = document.createElement("button");	
        button.setAttribute("id", flavor.id);	
        button.textContent = flavor.name;	
        button.addEventListener("click", () => {	
            flavorFilterSection.querySelector(".active")?.classList.remove("active")	
            button.classList.add("active")	
            filterProducts(flavor.id)	
        })	
        flavorFilterSection.appendChild(button);	
    });	

}	

function filterProducts(id) {	

    let productsToDisplay = products_list	

    if (id != "all") {	
        productsToDisplay = products_list.filter(p => p.flavor_id == id)	
    }	

    displayProducts(productsToDisplay)	

}	

// Add items to cart	
function addToCart(e) {	

    // document.querySelector(".empty-cart").classList.remove("active")	
    // document.querySelector(".no-empty-cart").classList.add("active")	

    let cartItemId = e.target.parentElement.getAttribute("id");	

    if (cartItems.filter(item => item?.itemId == cartItemId).length != 0) {	
        alert("The item already in your cart!");	
        return;	
    }	

    let item = products_list.find(item => item.id == cartItemId);	
    let pcs = e.target.parentElement.querySelector(".pcs").textContent;	
    let amount = item.price * pcs;	

    if (pcs == 0) {	
        alert("Please select number of cups you want!");	
        return;	
    }	

    cartItems.push({	
        itemId: cartItemId,	
        pcs: pcs,	
        amount: amount	
    });	

    localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems))	
    alert(`${pcs} ${item.name} ice cream/s successfully added to the cart!`);	

    displayCartItems()	

}	

function handleRemoveButtonInCart() {	
    let removeBtns = document.querySelectorAll(".remove-cart-item-btn");	
    removeBtns.forEach(btn => {	
        btn.addEventListener("click", () => {	
            cartItems = cartItems.filter(item => item?.itemId != btn.parentElement.parentElement.getAttribute("id"))	
            localStorage.setItem(LOCAL_STORAGE_CART_KEY, JSON.stringify(cartItems))	
            displayCartItems()	
            // if (cartItems.length == 0) {	
            //     document.querySelector(".empty-cart").classList.add("active")	
            //     document.querySelector(".no-empty-cart").classList.remove("active")	
            // }	
        })	
    });	

}	

function displayCartItems() {	

    if (cartItems.length !=0 ) {	
        document.querySelector(".empty-cart").classList.remove("active")	
        document.querySelector(".no-empty-cart").classList.add("active")	
    }else {	
        document.querySelector(".empty-cart").classList.add("active")	
        document.querySelector(".no-empty-cart").classList.remove("active")	
    }	

    const cartUlList = document.querySelector(".cart-list-items");	
    cartUlList.innerHTML = "";	

    let subtotal = 0, noOfItems = 0;	
    cartItems.map(ci => {	
        let itemLi = document.createElement("li");	

        itemLi.setAttribute("id", ci.itemId);	

        let product = products_list.find(p => p.id == ci.itemId)	

        itemLi.innerHTML = `<img src="${product.image}" alt="">	
                            <div class="text">	
                                <span class="name">${product.name}</span><br>	
                                <span class="qty">${ci.pcs}</span> x ${product.price} <br>	
                                <div class="price">$${ci.amount}</div>	
                                <i class="fa fa-times remove-cart-item-btn" aria-hidden="true"></i>	
                            </div>`;	

        cartUlList.appendChild(itemLi);	
        handleRemoveButtonInCart()	
        subtotal += Number.parseFloat(ci.amount);	
        noOfItems += Number.parseInt(ci.pcs)	
    })	

    document.querySelector(".sub-total").textContent = `$${subtotal}`;	
    document.querySelector(".no-of-cart-items").textContent = noOfItems;	

}	

function handleQuantityButtonsInProductCard() {	
    const increaseBtns = document.querySelectorAll(".increase");	
    const decreaseBtns = document.querySelectorAll(".decrease");	

    increaseBtns.forEach(btn => {	
        btn.addEventListener("click", () => {	
            btn.previousElementSibling.textContent = parseInt(btn.previousElementSibling.textContent) + 1;	
        });	
    });	
    decreaseBtns.forEach(btn => {	
        btn.addEventListener("click", () => {	
            if (btn.nextElementSibling.textContent > 0) {	
                btn.nextElementSibling.textContent = parseInt(btn.nextElementSibling.textContent) - 1;	
            }	
        });	
    });	
}	