// Sample Blog Posts Data
const blogPosts = [
    { img: "images/blog1.jpg", title: "Sustainable Tea Farming", desc: "How eco-friendly practices are shaping the future of tea farming.", link: "blog1.html" },
    { img: "images/blog2.jpg", title: "The Science Behind Tea Oxidation", desc: "Understanding how oxidation influences tea flavor and quality.", link: "blog2.html" },
    { img: "images/blog3.jpg", title: "Tea and Mental Wellness", desc: "Exploring the stress-relieving and cognitive benefits of tea.", link: "blog3.html" },
    { img: "images/blog4.jpg", title: "Future Trends in the Tea Industry", desc: "Innovations and market shifts in the global tea industry.", link: "blog4.html" },
    { img: "images/blog5.jpg", title: "Cold Brew Tea: A Refreshing Trend", desc: "Why cold-brewed tea is gaining popularity worldwide.", link: "blog5.html" },
    { img: "images/blog6.jpg", title: "Women in the Tea Industry", desc: "The impact of women in tea cultivation and leadership roles.", link: "blog6.html" },
    { img: "images/blog7.jpg", title: "How Terroir Affects Tea Flavor", desc: "The role of climate and soil in defining tea characteristics.", link: "blog7.html" },
    { img: "images/blog8.jpg", title: "The Rise of Specialty Tea", desc: "Why connoisseurs are seeking rare and artisanal teas.", link: "blog8.html" },
    { img: "images/blog9.jpg", title: "Biodegradable Tea Packaging", desc: "Sustainability initiatives in tea packaging solutions.", link: "blog9.html" },
    { img: "images/blog10.jpg", title: "AI and Automation in Tea Processing", desc: "How technology is transforming tea manufacturing.", link: "blog10.html" },
    { img: "images/blog11.jpg", title: "Caffeine Content in Different Teas", desc: "Comparing caffeine levels across various tea types.", link: "blog11.html" },
    { img: "images/blog12.jpg", title: "Tea Blending: The Art and Science", desc: "How master blenders create unique tea flavors.", link: "blog12.html" },
    { img: "images/blog13.jpg", title: "Tea Tourism: Exploring the Best Tea Plantations", desc: "Top destinations for tea lovers around the world.", link: "blog13.html" }
];


const postsPerPage = 9;
let currentPage = 1;

function displayPosts() {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    const blogGrid = document.getElementById("blog-grid");
    if (!blogGrid) return; // Ensure the element exists

    blogGrid.innerHTML = "";

    currentPosts.forEach(post => {
        const blogCard = `
            <div class="blog-card">
                <img src="${post.img}" alt="${post.title}">
                <div class="blog-content">
                    <h3>${post.title}</h3>
                    <p>${post.desc}</p>
                    <a href="${post.link}" class="read-more">Read More</a>
                </div>
            </div>
        `;
        blogGrid.innerHTML += blogCard;
    });

    document.getElementById("pageNumber").innerText = currentPage;
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = endIndex >= blogPosts.length;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("prevBtn").addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayPosts();
        }
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (currentPage * postsPerPage < blogPosts.length) {
            currentPage++;
            displayPosts();
        }
    });

    // Initial Display
    displayPosts();
});
