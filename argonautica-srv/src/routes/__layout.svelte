<!-- src/routes/__layout.svelte -->
<nav>
    <p>Argonaut Labs</p>
	<a href="/">Home</a>
	<a href="https://github.com/argonaut0">Github</a>
</nav>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;500&display=swap');
    nav {
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        background-color: #262626;
        padding: 2vh;
    }
    a, p {
        font-family: "Fira Code", monospace;
        color: whitesmoke;
    }
</style>
