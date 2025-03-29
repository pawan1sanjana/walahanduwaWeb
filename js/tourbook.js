// Sample reviews data
const reviewsData = [
    {
        name: "John Doe",
        rating: 5,
        comment: "Beautifull Tea factory to visit with excellent explanations and wonderfull persons to meet and share expérience of Tea production..",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },

    {
        name: "Michael Brown",
        rating: 5,
        comment: "We had our own little private tour, because we were the only ones there! We got to go through the whole factory and our guide explained to us the whole process of making tea. We then got to try some tea that we liked and I bought a small bag of tea!",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
		name: "Sophia Johnson",
		rating: 4,
		comment: "Very satisfied with the service. Would definitely come back!",
		image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];

// Function to generate star rating
function getStarRating(rating) {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
}

// Function to load reviews dynamically
function loadReviews() {
    const reviewsContainer = document.getElementById("reviews");
    reviewsContainer.innerHTML = ""; // Clear existing reviews

    reviewsData.forEach(review => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        reviewCard.innerHTML = `
            <img src="${review.image}" alt="${review.name}">
            <div class="review-content">
                <h4>${review.name}</h4>
                <div class="stars">${getStarRating(review.rating)}</div>
                <p>${review.comment}</p>
            </div>
        `;

        reviewsContainer.appendChild(reviewCard);
    });
}

// Load reviews on page load
document.addEventListener("DOMContentLoaded", loadReviews);
