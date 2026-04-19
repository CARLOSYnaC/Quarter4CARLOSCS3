let movieRatings = JSON.parse(localStorage.getItem("movieRatings")) || {};

function showMovies() {
  const list = document.getElementById("movieList");
  list.innerHTML = "";

  for (let key in movieRatings) {
    const movie = movieRatings[key];

    // convert rating → stars
    let stars = "★".repeat(movie.rating) + "☆".repeat(5 - movie.rating);

    const div = document.createElement("div");
    div.className = "movie";

    div.innerHTML = `
      <strong>${movie.name}</strong> (${movie.year}) <br>
      <span style="color: gold;">${stars}</span>
      <button class="delete-btn" onclick="removeMovie('${key}')">Delete</button>
    `;

    list.appendChild(div);
  }
}

document.getElementById("moviesForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const key = document.getElementById("key").value.trim();
  const name = document.getElementById("movie").value.trim();
  const year = document.getElementById("year").value.trim();

  const ratingInput = document.querySelector('input[name="rating"]:checked');
  const rating = ratingInput ? Number(ratingInput.value) : 0;

  movieRatings[key] = { name, year, rating };

  localStorage.setItem("movieRatings", JSON.stringify(movieRatings));

  showMovies();
  this.reset();
});

function removeMovie(key) {
  delete movieRatings[key];
  localStorage.setItem("movieRatings", JSON.stringify(movieRatings));
  showMovies();
}

showMovies();
