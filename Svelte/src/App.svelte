<script>
  import Counter from './lib/Counter.svelte'
  import List from './lib/List.svelte'
</script>

<main>
  <div class="main-container">
    <img src="svelte.png" alt="Svelte logo">
    <h1>Svelte demo</h1>
    <hr>
    <Counter />
    <hr>
    <List />
  </div>
</main>

<style>
  div.main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  hr {
    width: 100%;
    margin: 30px 0px;
  }

  img {
    height: 75px;
  }
</style>
