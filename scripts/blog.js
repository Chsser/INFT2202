/*
Names: Chase Barry (100751425) and Daniel Cameron (100787848)
Date: March 15, 2024
File: blog.js
*/

// define an asynchronous function
const getBlogPosts = async () => {
    // fetch blog data from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // convert data to JSON
    const data = await response.json();
    
    const blogPosts = document.getElementById('blog-posts');
    // get first 20 blog posts
    
    data.slice(0, 20).forEach(async (post, index) => {

        // Create a new blog post
        const blogPost = document.createElement('div');
        blogPost.className = 'col-md-4 mb-4';
        
        // fetch pretty nature photos from Pixabay API
        const imageResponse = await fetch(`https://pixabay.com/api/?key=42900465-81a9de7d830da0d31ce21fe10&q=nature&image_type=photo&pretty=true`);
        // convert imageData to JSON
        const imageData = await imageResponse.json();
        const image = imageData.hits[index].webformatURL;
        blogPost.innerHTML = `
        <div class="card h-100">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
        `;

        blogPosts.appendChild(blogPost);
    });
};
getBlogPosts();