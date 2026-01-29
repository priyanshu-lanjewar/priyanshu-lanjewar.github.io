const BLOG_FEED =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@priyanshu.lanjewar";

fetch(BLOG_FEED)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("blog-posts");
    container.innerHTML = "";

    data.items.slice(0, 6).forEach(post => {
      const image =
        post.thumbnail && post.thumbnail.length > 0
          ? post.thumbnail
          : "./assets/images/icon-blog.svg";

      const li = document.createElement("li");
      li.className = "blog-post-item";

      li.innerHTML = `
        <a href="${post.link}" target="_blank" rel="noopener">
          <figure class="blog-banner-box">
            <img src="${image}" alt="${post.title}" loading="lazy">
          </figure>

          <div class="blog-content">
            <h3 class="h3 blog-item-title">${post.title}</h3>
            <p class="blog-text">
              ${post.description.replace(/<[^>]*>?/gm, "").slice(0, 120)}...
            </p>
          </div>
        </a>
      `;

      container.appendChild(li);
    });
  })
  .catch(() => {
    document.getElementById("blog-posts").innerHTML =
      "<p>Unable to load blog posts.</p>";
  });
