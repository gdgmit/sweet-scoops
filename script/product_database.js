const products_list = [
    {
        id: "p001",
        name: "Chocolate Chip Cookie",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/chocolate.jpg",
        rating: 4.5,
        reviews: [
            { user: "John Doe", comment: "Delicious and worth the price!", stars: 5 },
            { user: "Jane Smith", comment: "A bit too sweet for me.", stars: 4 }
        ],
        nutritional_info: {
            calories: 210,
            fat: "10g",
            protein: "3g",
            carbs: "30g"
        }
    },
    {
        id: "p002",
        name: "Häagen-Dazs Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/vannila.jpg",
        rating: 4.8,
        reviews: [
            { user: "Alice Green", comment: "Smooth and creamy, perfect flavor!", stars: 5 },
            { user: "Bob White", comment: "Excellent vanilla taste!", stars: 5 }
        ],
        nutritional_info: {
            calories: 230,
            fat: "12g",
            protein: "4g",
            carbs: "28g"
        }
    },
    {
        id: "p003",
        name: "Homemade Vanilla",
        flavor_id: "f001",
        off: 5,
        price: 35,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, ad.",
        image: "images/mango.jpg",
        rating: 4.3,
        reviews: [
            { user: "Charlie Brown", comment: "Classic vanilla, good texture.", stars: 4 },
            { user: "Daisy Blue", comment: "Would buy again!", stars: 5 }
        ],
        nutritional_info: {
            calories: 220,
            fat: "11g",
            protein: "3g",
            carbs: "27g"
        }
    },
];
export default products_list;
