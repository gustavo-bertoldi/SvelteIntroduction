/*------------ Counter section ------------*/
let currentCounter = 0;

function incrementCounter() {
  let counterButton = document.getElementById('counter-btn');
  currentCounter += 1;
  counterButton.textContent = `Clicks: ${currentCounter}`;
}

/*------------- List section -------------*/
let movies = JSON.parse(localStorage.getItem('movie-list')) || [];

function buildList() {
  let movieList = document.getElementById('movie-list');
  movies.forEach(movie => {
    let listItem = document.createElement('li');
    listItem.textContent = movie;
    listItem.setAttribute('title', 'Click to delete from list');
    listItem.addEventListener('click', () => deleteMovie(movie));
    movieList.appendChild(listItem);
  });
  updateListLength();
}


function addMovie() {
  let movie = document.getElementById('movie-name-input')?.value;
  if (movie && !movies.includes(movie)) {
    movies.push(movie);
    localStorage.setItem('movie-list', JSON.stringify(movies));
    let movieList = document.getElementById('movie-list');
    let listItem = document.createElement('li');
    listItem.textContent = movie;
    listItem.setAttribute('title', 'Click to delete from list');
    listItem.addEventListener('click', (evt) => deleteMovie(evt.target));
    movieList.appendChild(listItem);
    updateListLength();
  }
}

function deleteMovie(movieElement) {
  let movie = movieElement.textContent;
  movies = movies.filter(m => m !== movie);
  localStorage.setItem('movie-list', JSON.stringify(movies));
  movieElement.remove();
  updateListLength();
}

function deleteAllMovies() {
  let movieList = document.getElementById('movie-list');
  Array.from(movieList.children).forEach(el => el.remove());
  movies = [];
  localStorage.setItem('movie-list', JSON.stringify(movies));
  updateListLength();
}

function updateListLength() {
  let listLength = document.getElementById('list-length');
  if (listLength) listLength.textContent = `List contains ${movies.length} movie${movies.length !== 1 ? "s" : ""}`;
}

//Add event listeners to elements
document.getElementById('counter-btn').addEventListener('click', incrementCounter);
document.getElementById('add-movie-btn').addEventListener('click', addMovie);
document.getElementById('delete-all-movies-btn').addEventListener('click', deleteAllMovies);
buildList();