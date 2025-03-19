// Dados iniciais (postagens fixas)
let posts = [
    {
        id: 1,
        user: "cazetv",
        image: "https://via.placeholder.com/614x614?text=Video+Post",
        caption: "NEM NO VIDEOGAME...",
        likes: 14499,
        comments: ["Adicione um comentário..."],
        isVideo: true,
        needsTranslation: true
    },
    {
        id: 2,
        user: "@VendedorDeBikes",
        image: "https://via.placeholder.com/614x614?text=Bike+Elétrica",
        caption: "Nova bike elétrica - 50km de autonomia!",
        likes: 0,
        comments: [],
        isVideo: false,
        needsTranslation: false
    },
    {
        id: 3,
        user: "@VendedorDeBikes",
        image: "https://via.placeholder.com/614x614?text=Bike+de+Marchas",
        caption: "Bike de marchas perfeita para trilhas!",
        likes: 0,
        comments: [],
        isVideo: false,
        needsTranslation: false
    },
    {
        id: 4,
        user: "@VendedorDeBikes",
        image: "https://via.placeholder.com/614x614?text=Bike+Híbrida",
        caption: "Híbrida para cidade e aventura!",
        likes: 0,
        comments: [],
        isVideo: false,
        needsTranslation: false
    }
];

// Carregar postagens do localStorage, se existirem
const savedPosts = localStorage.getItem("posts");
if (savedPosts) {
    posts = JSON.parse(savedPosts);
}

// Função para renderizar postagens
function renderPosts(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    posts.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.className = "post";
        postDiv.innerHTML = `
            <div class="post-header">
                <div class="post-user">${post.user}</div>
            </div>
            <div class="post-media">
                ${post.isVideo ? `<img src="${post.image}" alt="Postagem"><span class="play-icon">▶</span>` : `<img src="${post.image}" alt="Postagem">`}
            </div>
            <div class="post-actions">
                <button class="like-btn" onclick="toggleLike(${post.id})">${post.liked ? "❤️" : "♡"}</button>
                <span>${post.likes} curtidas</span>
            </div>
            <div class="post-caption"><strong>${post.user}</strong> ${post.caption}</div>
            ${post.needsTranslation ? `<a href="#" class="translate-link">Ver tradução</a>` : ""}
            <div class="comment-count">${post.comments.length > 0 ? `Ver todos os ${post.comments.length} comentários` : ""}</div>
            <div class="comment-section">
                <input type="text" placeholder="Adicione um comentário..." id="comment-${post.id}">
                <button onclick="addComment(${post.id})">Publicar</button>
            </div>
            <div class="comments">
                ${post.comments.map(comment => `<p>${comment}</p>`).join("")}
            </div>
        `;
        if (post.liked) postDiv.querySelector(".like-btn").classList.add("liked");
        container.appendChild(postDiv);
    });
}

// Curtir/descurtir
function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post.liked) {
        post.likes--;
        post.liked = false;
    } else {
        post.likes++;
        post.liked = true;
    }
    savePosts();
    renderPosts("posts");
    renderPosts("profile-posts");
}

// Adicionar comentário
function addComment(postId) {
    const input = document.getElementById(`comment-${postId}`);
    const comment = input.value.trim();
    if (comment) {
        const post = posts.find(p => p.id === postId);
        post.comments.push(comment);
        input.value = "";
        savePosts();
        renderPosts("posts");
        renderPosts("profile-posts");
    }
}

// Adicionar nova postagem
function addPost() {
    const imageUrl = document.getElementById("post-image").value;
    const caption = document.getElementById("post-caption").value;
    if (imageUrl && caption) {
        const newPost = {
            id: posts.length + 1,
            user: "@VendedorDeBikes",
            image: imageUrl,
            caption: caption,
            likes: 0,
            comments: [],
            isVideo: false,
            needsTranslation: false
        };
        posts.push(newPost);
        document.getElementById("post-image").value = "";
        document.getElementById("post-caption").value = "";
        savePosts();
        renderPosts("posts");
        renderPosts("profile-posts");
    }
}

// Salvar no localStorage
function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

// Renderizar ao carregar a página
renderPosts("posts");
renderPosts("profile-posts");