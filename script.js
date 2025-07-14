const movies = [
  {
    id: 1,
    title: "Fast & Furious 9",
    description: "Dom Toretto and his crew face new threats.",
    poster: "assets/posters/movie1.jpg",
    video: "assets/movies/trailer1.mp4"
  },
  {
    id: 2,
    title: "Avengers: Endgame",
    description: "The Avengers take one final stand.",
    poster: "assets/posters/movie2.jpg",
    video: "assets/movies/trailer2.mp4"
  }
];

const grid = document.getElementById("movieGrid");
if (grid) {
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.innerHTML = \`
      <a href="movie-detail.html?id=\${movie.id}">
        <img src="\${movie.poster}" alt="\${movie.title}" />
        <p>\${movie.title}</p>
      </a>
    \`;
    grid.appendChild(div);
  });
}

const detail = document.getElementById("movieDetail");
if (detail) {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = parseInt(urlParams.get("id"));
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    detail.innerHTML = \`
      <h2>\${movie.title}</h2>
      <p>\${movie.description}</p>
      <video controls>
        <source src="\${movie.video}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    \`;
  }
}