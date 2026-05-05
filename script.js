// Navigation functions

function goToRegister() {
  window.location.href = "register.html";
}

function goToLogin() {
  window.location.href = "login.html";
}

// Registration

function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  if (!username || !password) {
    alert("Please fill all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.username === username)) {
    alert("User already exists");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully!");
  window.location.href = "login.html";
}

// Login 

function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", username);
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}

// Logout

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// Protects homepage if not logged in

if (window.location.pathname.includes("index.html")) {
  if (!localStorage.getItem("currentUser")) {
    window.location.href = "login.html";
  }
}

// Loads Anime

function loadAnime() {
  const container = document.getElementById("animeContainer");

  if (!container) return; // prevents errors on other pages

  const animeList = [
    { title: "Naruto", image: "images/naruto.jpg" },
    { title: "Attack on Titan", image: "images/aot.jpg" },
    { title: "One Piece", image: "images/onepiece.jpg" }
  ];

animeList.forEach(anime => {
    const card = document.createElement("div");
    card.className = "card"; // IMPORTANT for CSS styling

    card.innerHTML = `
      <img class="anime-img" src="${anime.image}" alt="${anime.title}">
      <h3>${anime.title}</h3>
    `;

    container.appendChild(card);
  });
}

loadAnime();