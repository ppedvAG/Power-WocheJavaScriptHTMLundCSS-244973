<script>
    let count = 0;
    function increment() {
        count += 1;
    }
</script>

<style>
    button {
        font-size: 1.2em;
        padding: 0.5em 1em;
    }
</style>

<main>
    <h1>Counter {count}</h1>
    <button on:click={increment}>Klick mich!</button>
</main>