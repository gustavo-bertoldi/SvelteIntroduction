<script>
  import { onMount } from "svelte";

  let movies = [];
  let currentMovie = "";
  
  //Variables starting with $ updates value each time its dependent variables change value.
  $: listLength = `List contains ${movies.length} movie${movies.length !== 1 ? "s" : ""}`;

  function addMovie() {
    if (currentMovie.length > 0 && !movies.includes(currentMovie)) {
      movies = [...movies, currentMovie];
      localStorage.setItem("my-movies", JSON.stringify(movies));
    }
  }

  function deleteMovie(movie) {
    movies = movies.filter(m => m !== movie);
    localStorage.setItem("my-movies", JSON.stringify(movies));
  }

  function deleteAllMovies() {
    movies = [];
    localStorage.setItem("my-movies", JSON.stringify(movies));
  }

  /**
   * The onMount function is called by Svelte when current component is rendered to the DOM
   */
  onMount(() => {
    movies = JSON.parse(localStorage.getItem("my-movies")) || [];
  });
</script>

<div class="list-container">
  <p>{listLength}</p>
  <ul>
    {#each movies as movie}
      <li title="Click to delete from list" on:click={() => deleteMovie(movie)}>{movie}</li>
    {/each}
  </ul>
  <input type="text" bind:value={currentMovie} placeholder="Movie name" />
  <button class="add-movie" on:click={addMovie}>Add movie</button>
  <button class="delete-movies" on:click={deleteAllMovies}>Delete all movies</button>
</div>

<style>
  div.list-container {
    width: 300px;
    text-align: center;
  }

  button.delete-movies {
    margin-top: 10px;
  }

  li {
    margin: 7px 0px;
  }

  li:hover {
    cursor: pointer;
    color: red;
  }
</style>
